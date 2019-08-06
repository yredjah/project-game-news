/* eslint-disable */
// const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');
var Sequelize = require('sequelize');

const REGEX_PNG = /[\w\-_\+\(\)]{0,}[\.png|\.PNG]{4}/;
const REGEX_VIDEO_ID = /(?:youtu\.be\/|youtube.com\/(?:watch\?.*\bv=|embed\/|v\/)|ytimg\.com\/vi\/)(.+?)(?:[^-a-zA-Z0-9]|$)/;
const TITLE_MIN_LENGTH = 2;
const text_MIN_LENGTH = 4;

createGenre = (gameId, genres) => {
  genres.forEach(genre => {
      // console.log(gameId);
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
  });
};

createPlateform = (gameId, plateforms) => {
  plateforms.forEach(plateform => {
      // console.log(gameId);
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
    const youtubeUrl = req.body.youtubeUrl;
    const image = req.body.image;
    const gameName = req.body.gameName;
    const genres =req.body.genres;
    const plateforms = req.body.plateforms;

    if (title === null || text == null) {
      return res.status(400).json({'error': 'missing parameters'});
    }
    if (title.length <= TITLE_MIN_LENGTH || text.length <= text_MIN_LENGTH) {
      return res.status(400).json({'error': 'invalid parameters'});
    }

    models.User.findOne({
      where: {id: userId}
    }).then(function(userFound) {
      if(userFound) {
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
            videoId: youtubeUrl,
            image: image,
            UserId: userFound.id,
            GameId: game.id,
          })
          .then(function(newArticle) {
            if (newArticle) {
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

    // const date = new Date();
    // const lastWeek = date.getDate() - 7;

    models.Article.findAll({
      // where: { date: {[Op.gt]: lastWeek,} },
      order: [['date', 'DESC']],
      limit: NUMBER_OF_ARTICLE,
    }).then(function(articlesFound) {
      return res.status(201).json(articlesFound);
    }).catch(function(err) {
      return res.status(500).json({'error': 'unable to fin articles', err})
    })
  },
};
