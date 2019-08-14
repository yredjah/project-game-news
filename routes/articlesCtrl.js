/* eslint-disable */
// const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');
const Sequelize = require('sequelize');
const moment = require('moment');
const mailerUtils = require('../utils/mailerUtils.js');

const REGEX_PNG = /[\w\-_\+\(\)]{0,}[\.png|\.PNG]{4}/;
const REGEX_VIDEO_ID = /(?:youtu\.be\/|youtube.com\/(?:watch\?.*\bv=|embed\/|v\/)|ytimg\.com\/vi\/)(.+?)(?:[^-a-zA-Z0-9]|$)/;
const TITLE_MIN_LENGTH = 2;
const text_MIN_LENGTH = 4;

createGenre = (gameId, genres) => {
  genres.forEach(genre => {
      // console.log(gameId);
    if (genre != ''){
      models.Genre.findOrCreate({
        where: {name: genre}
      }).then(function([genreFound, created]){
        models.Game_has_Genre.findOrCreate({
          where: {
            GameId: gameId,
            GenreId: genreFound.id,
          }
        }).catch(function(err) {
          // return res.status(500).json({'error': 'unable to find or create game_has_genre'});
          console.log('unable to find or create game_has_genre', err);
        })
      }).catch(function(err) {
        // return res.status(500).json({'error': 'unable to find or create genre'})
        console.log('unable to find or create genre', err);
      })
    }
  });
};

createPlateform = (gameId, plateforms) => {
  plateforms.forEach(plateform => {
      // console.log(gameId);
    if (plateform != ''){
      models.Plateform.findOrCreate({
        where: {name: plateform}
      }).then(function([plateformFound, created]){
        models.Game_has_Plateform.findOrCreate({
          where: {
            GameId: gameId,
            PlateformId: plateformFound.id,
          }
        }).catch(function(err) {
          // return res.status(500).json({'error': 'unable to find or create game_has_genre'});
          console.log('unable to find or create game_has_plateform', err);
        })
      }).catch(function(err) {
        // return res.status(500).json({'error': 'unable to find or create genre'})
        console.log('unable to find or create plateform', err);
      })
    }
  });
};

//routes
module.exports = {
  addArticles: function(req, res) {
    // getting header
    const headerAuth  = req.headers['authorization'];
    const userId      = jwtUtils.getUserId(headerAuth);

    //params
    const title = req.body.title;
    const text = req.body.text;
    const resume = req.body.resume;
    const videoId = req.body.videoId;
    const image = req.body.image;
    const gameName = req.body.gameName;
    const genres =req.body.genres;
    const plateforms = req.body.plateforms;
    const date = new Date();
    if (title === null || title === 'null' || text == null || text == 'null' || gameName == null || gameName == 'null' || resume == null || resume == 'null' || genres == null || genres == [] || plateforms == null || plateforms == [] ) {
      return res.status(400).json({'error': 'missing parameters'});
    }
    if (title.length <= TITLE_MIN_LENGTH || text.length <= text_MIN_LENGTH) {
      return res.status(400).json({'error': 'invalid parameters'});
    }

    models.User.findOne({
      where: {id: userId}
    }).then(function(userFound) {
      if(userFound.RoleId === 2) {
        models.Game.findOrCreate({
          where: {name: gameName}
        }).then(function([game, created]) {
          //findOrCreate genre
          //findOrCreate game_has_genre
          createGenre(game.id, genres);
          //findOrCreate plateform
          //findOrCreate game_has_plateform
          createPlateform(game.id, plateforms, res);
          models.Article.create({
            title: title,
            text: text,
            resume: resume,
            videoId: videoId,
            image: image,
            UserId: userFound.id,
            GameId: game.id,
            date: date,
          })
          .then(function(newArticle) {
            if (newArticle) {
              models.User.findAll()
              .then((users) => {
                users.forEach((user) => {
                  mailerUtils.mailerArticleNotif(newArticle, user.mail);
                });
              })
              return res.status(201).json(newArticle);
            } else {
              return res.status(500).json({'error': 'cannot post article'});
            }
          });
        }).catch(function(err) {
          return res.status(500).json({'error': 'unable to find or create a game', err});
        });
      } else {
        res.status(404).json({'error': 'user not found'});
      }
    }).catch(function(err) {
      return res.status(500).json({'error': 'unable to verify user'});
    })
  },
  listArticles: function (req, res) {
    const Op = Sequelize.Op;
    //we want to take out 30 articles from the database
    const NUMBER_OF_ARTICLE = 30;

    const lastWeek = moment().subtract('days', 7);

    models.Article.findAll({
      where: { date: {[Op.gt]: lastWeek,} },
      order: [['createdAt', 'DESC']],
      limit: NUMBER_OF_ARTICLE,
    }).then(function(newsOfTheWeek) {
      models.Article.findAll({
        where: { date: {[Op.lt]: lastWeek,} },
        order: [['createdAt', 'DESC']],
        limit: NUMBER_OF_ARTICLE,
      }).then(function(news) {
        const articles = {newsOfTheWeek: newsOfTheWeek, news: news};
        return res.status(201).json(articles);
      }).catch(function(err) {
        return res.status(500).json({'error': 'unable to find articles', err})
      })
    }).catch(function(err) {
      return res.status(500).json({'error': 'unable to find articles', err})
    })
  },
  getOne: function (req, res) {
    const articleId = req.body.articleId;
    models.Article.findOne({
      where: {id: articleId,},
    }).then(function(article) {
      return res.status(200).json(article)
    }).catch(function(err) {
      return res.status(200).json({'error': 'unable to find article', err})
    })
  },
  addLike: function (req, res) {
    const headerAuth  = req.headers['authorization'];
    const userId      = jwtUtils.getUserId(headerAuth);
    const articleId = req.body.articleId;
    models.User_vote_Article.findOrCreate({where:{ArticleId: articleId, UserId: userId}})
    .then(([relationFound, created]) => {
      console.log(relationFound);
      if(!created){
        return res.status(500).json({'error': 'user already vote'})
      }
      models.Article.increment({like: 1}, {where:{id: articleId}})
      .then(article => {
        models.Article.findOne({where:{id: articleId}})
        .then(articleFound => (
          res.status(200).json(articleFound)
        ))
        .catch(err => (
          res.status(500).json({'error': 'unable to find the article', err})
        ))
      })
      .catch(err => (
        res.status(500).json({'error': 'unable to add like', err})
      ));
    })
  },
  addDislike: function (req, res) {
    const headerAuth  = req.headers['authorization'];
    const userId      = jwtUtils.getUserId(headerAuth);
    const articleId = req.body.articleId;
    models.User_vote_Article.findOrCreate({where:{ArticleId: articleId, UserId: userId}})
    .then(([relationFound, created]) => {
      console.log(relationFound);
      if(!created){
        return res.status(500).json({'error': 'user already vote'})
      }
      models.Article.increment({dislike: 1}, {where:{id: articleId}})
      .then(article => {
        models.Article.findOne({where:{id: articleId}})
        .then(articleFound => (
          res.status(200).json(articleFound)
        ))
        .catch(err => (
          res.status(500).json({'error': 'unable to find the article', err})
        ))
      })
      .catch(err => (
        res.status(500).json({'error': 'unable to add dislike', err})
      ));
    })
  },
  sortArticlesByPlateform: function (req, res) {
    //we want to take out 30 articles from the database
    const NUMBER_OF_ARTICLE = 30;

    const category = req.body.category;
    
    models.Plateform.findOne({
      where: {name: category}
    }).then((PlateformFound) => {
      models.Article.findAll({
        limit: NUMBER_OF_ARTICLE,
        order: [['createdAt', 'DESC']],
        include: [{
          model: models.Game,
          include: [{
            model: models.Game_has_Plateform,
            where: {PlateformId: PlateformFound.id}
          }]
        }]
      }).then((results) => (
        res.status(200).json(results)
      )).catch((err) => (
        res.satus(500).json({'error': 'unable to find articles', err})
      ))
    }).catch((err) => (
      res.status(500).json({'erro': 'unable to find the plateform', err})
    ))
  },
  sortArticlesByGenre: function (req, res) {
    //we want to take out 30 articles from the database
    const NUMBER_OF_ARTICLE = 30;

    const category = req.body.category;

    models.Genre.findOne({
      where: {name: category}
    }).then((genreFound) => {
      models.Article.findAll({
        limit: NUMBER_OF_ARTICLE,
        order: [['createdAt', 'DESC']],
        include: [{
          model: models.Game,
          include: [{
            model: models.Game_has_Genre,
            where: {GenreId: genreFound.id}
          }]
        }]
      }).then((results) => (
        res.status(200).json(results)
      )).catch((err) => (
        res.satus(500).json({'error': 'unable to find articles', err})
      ))
    }).catch((err) => (
      res.status(500).json({'erro': 'unable to find the genre', err})
    ))
  },
  getArticlesByPreferencies: function (req, res) {
    const headerAuth  = req.headers['authorization'];
    const userId      = jwtUtils.getUserId(headerAuth);
    
    const allGames = [];
    const uniqueGames = [];
    const promises = [];

    models.User_like_Plateform.findAll({
      where: {UserId: userId}
    }).then((likedPlateforms) => {
      models.User_like_Genre.findAll({
        where: {UserId: userId}
      }).then((likedGenres) => {
        likedPlateforms.forEach((plateform) => {
          likedGenres.forEach((genre) => {

          let promise = new Promise(function(resolve, reject) {
            models.Game.findAll({
              order: [['createdAt', 'DESC']],
              include: [{
                model: models.Game_has_Plateform,
                where: {PlateformId: plateform.PlateformId,
                },
              },
              {
                model: models.Game_has_Genre,
                where: {GenreId: genre.GenreId,
                },
              }]
              }).then((games) => {
                resolve(games);
                })
                .catch((err) => {
                  reject(err);
                })
              })
            promises.push(promise);
          })
        })

          Promise.all(promises).then(function(List) {
            List.forEach((games) => {
              games.forEach((game) => {
                let exist = false;
                allGames.forEach((uniqueGame) => {
                  if (uniqueGame.id === game.id) {
                    exist = true;
                  }
                })
                if (exist === false){
                  allGames.push(game)
                }
              })
            })
            console.log(allGames);
            return res.status(200).json(allGames);
          }).catch((err) => (
            res.status(500).json(err)
            ));
      }).catch((err) => (
        {'error': 'unable to find liked genre', err}
        ))
    }).catch((err) => (
    {'error': 'unable to find liked plateform', err}
    ))
  },
  sortArticleByGame: function (req, res) {
    const gameId = req.body.gameId;

    models.Article.findAll({
      where: {GameId: gameId},
      limit: 30,
      order: [['date', 'DESC']],
    }).then((articles) => (
      res.status(200).json(articles)
    )).catch((err) => (
      res.status(200).json(err)
    ))
  },
};
