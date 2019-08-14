/* eslint-disable */
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');
const Sequelize = require('sequelize');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,12}$/;

//routes
module.exports = {
  register: function(req, res) {
      // params
      const mail = req.body.mail;
      const username = req.body.username;
      const password = req.body.password;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      if(mail === '' || username ==='' || password === '' || firstname === '' || lastname === '') {
          return res.status(400).json({'error': 'missing parameters'});
      }

      if (username.length >= 13 || username.length <= 4){
          return res.status(400).json({'error': 'username length should be between 4 and 13 charactere'});
      }

      if (!EMAIL_REGEX.test(mail)){
          return res.status(400).json({'error': 'email not valide'});
      }
      if (!PASSWORD_REGEX.test(password)){
          return res.status(400).json({'error': 'password not valide - should be between 4 and 8 character and should have 1 numeric digit'});
      }

      models.User.findOne({
          attributes: ['mail'],
          where: {mail: mail}
      })
      .then(function(userFound) {
          if (!userFound) {

              bcrypt.hash(password, 5, function(err, bcryptedPassword) {
                  const newUser = models.User.create({
                      mail: mail,
                      username: username,
                      password: bcryptedPassword,
                      firstname: firstname,
                      lastname: lastname,
                      avatar: 'base1.gif',
                  })
                  .then(function(newUser){
                      return res.status(201).json({
                          'id': newUser.id
                      })
                  })
                  .catch(function(err) {
                      return res.status(500).json({ 'error': 'cannot add user', err});
                  });
              });
          } else {
              return res.status(409).json({ 'error': 'user alredy exist'});
          }

      })
      .catch(function(err){
          return res.status(500).json({ 'error': 'unable to verify user', err});
      });

  },
  login: function(req, res) {
      const mail = req.body.mail;
      const password = req.body.password;

      if (mail === null || password ===null){
          return res.status(400).json({ 'error': 'missing parameters'});
      }

      models.User.findOne({
          where: { mail: mail}
      })
      .then(function(userFound) {
        let {firstname, mail} = userFound;
          if (userFound) {
              bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt){
                  if(resBycrypt) {
                      return res.status(200).json({
                          'firstname' : firstname,
                          'mail' : mail,
                          'id': userFound.id,
                          'token': jwtUtils.generateTokenForUser(userFound)
                      });
                  }
              })
          } else { 
              return res.status(403).json({'error': 'invalid password'});
          }  
      })
      .catch(function(err) {
          return res.status(500).json({'error': 'unable to verify user', err});
      });
  },
  getUserProfile: function(req, res) {
    // Getting auth header
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
      return res.status(400).json({ 'error': 'wrong token' });

    models.User.findOne({
      attributes: [ 'id', 'mail', 'username', 'firstname', 'lastname', 'avatar' ],
      where: { id: userId },
      include: [{
        model: models.Role,
        attributes: ['name'],
      }]
    }).then(function(user) {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(404).json({ 'error': 'user not found' });
      }
    }).catch(function(err) {
      res.status(500).json({ 'error': 'cannot fetch user', err });
    });
  },
  selectPreferencies: function (req, res) {
    // Getting auth header
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
      return res.status(400).json({ 'error': 'wrong token' });

    const plateforms = req.body.plateforms;
    const genres = req.body.genres;
    return models.sequelize.transaction(t => {
      models.User_like_Plateform.destroy({
        where: {userId: userId}
      }).then(result => (
        models.User_like_Genre.destroy({
          where: {userId: userId}
        }).then(result => {
          plateforms.forEach(plateform => {
            return models.Plateform.findOne({
              where: {name: plateform}
            }).then(plateformFound => {
              return models.User_like_Plateform.findOrCreate({
                where: {PlateformId: plateformFound.id, UserId: userId}
              }).then()
              .catch(err => (
                res.status(500).json({'error': 'unable to find or create', err})
              ))
            }).catch(err => (
              res.status(500).json({'error': 'unable to find plateform', err})
            ))
          });
          genres.forEach(genre => {
            return models.Genre.findOne({
              where: {name: genre}
            }).then(genreFound => {
              return models.User_like_Genre.findOrCreate({
                where: {GenreId: genreFound.id, UserId: userId}
              }).then()
              .catch(err => (
                res.status(500).json({'error': 'unable to find or create', err})
              ))
            }).catch(err => (
              res.status(500).json({'error': 'unable to find genre', err})
            ))
          })
        }).catch(err => (
          res.status(500).json({'error': 'unable to destroy user preferencies', err})
        ))
      )).catch(err => (
        res.status(500).json({'error': 'unable to destroy user preferencies', err})
      ))
    }).then(() => (
      res.status(200).json({'result': 'success'})
    )).catch(err => (
      res.status(500).json(err)
    ))
  },
  getPreferencies: function(req, res) {
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
      return res.status(400).json({ 'error': 'wrong token' });

    models.Genre.findAll({
      include: [{
        model: models.User_like_Genre,
        where: {Genre: models.sequelize.literal('Genre.id'),
                UserId: userId,
              },
      }]
    }).then((genres) => {
      models.Plateform.findAll({
        include: [{
          model: models.User_like_Plateform,
          where: {PlateformId: models.sequelize.literal('Plateform.id'), UserId: userId},
        }]
      }).then((plateforms) => {
        return res.status(200).json({genres, plateforms});
      })
    })
  },
  setPreference: function (req, res) {
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    const preferenceName = req.body.name;
    const category = req.body.category;

    if (category === 'genre') {
      models.Genre.findOne({
        where: {name: preferenceName}
      }).then((genreFound) => {
        models.User_like_Genre.create({
          GenreId: genreFound.id,
          UserId: userId,
        }).then(() => (
          res.status(200).json({'succes': 'success'})
        )).catch((err) => (
          res.status(500).json({'error': 'unable to create preference'})
        ))
      }).catch((err) => (
        res.status(500).json({'error': 'unable to find genre'})
      ))
    }
    if (category === 'plateform') {
      models.Plateform.findOne({
        where: {name: preferenceName}
      }).then((PlateformFound) => {
        models.User_like_Plateform.create({
          PlateformId: PlateformFound.id,
          UserId: userId,
        }).then(() => (
          res.status(200).json({'succes': 'success'})
        )).catch((err) => (
          res.status(500).json({'error': 'unable to create preference'})
        ))
      }).catch((err) => (
        res.status(500).json({'error': 'unable to find Plateform'})
      ))
    }
  },
  delPreference: function (req, res) {
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    const preferenceName = req.body.name;
    const category = req.body.category;

    if (category === 'genre') {
      models.Genre.findOne({
        where: {name: preferenceName}
      }).then((genreFound) => {
        models.User_like_Genre.destroy({
          where: {
            GenreId: genreFound.id,
            UserId: userId,
          }
        }).then(() => (
          res.status(200).json({'succes': 'success'})
        )).catch((err) => (
          res.status(500).json({'error': 'unable to destroy preference'})
        ))
      }).catch((err) => (
        res.status(500).json({'error': 'unable to find genre'})
      ))
    }
    if (category === 'plateform') {
      models.Plateform.findOne({
        where: {name: preferenceName}
      }).then((PlateformFound) => {
        models.User_like_Plateform.destroy({
          where: {
            PlateformId: PlateformFound.id,
            UserId: userId,
          }
        }).then(() => (
          res.status(200).json({'succes': 'success'})
        )).catch((err) => (
          res.status(500).json({'error': 'unable to destroy preference'})
        ))
      }).catch((err) => (
        res.status(500).json({'error': 'unable to find Plateform'})
      ))
    }
  },
}
