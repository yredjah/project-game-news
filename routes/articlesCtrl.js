/* eslint-disable */
// const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');

const REGEX_PNG = /[\w\-_\+\(\)]{0,}[\.png|\.PNG]{4}/;
const REGEX_VIDEO_ID = /(?:youtu\.be\/|youtube.com\/(?:watch\?.*\bv=|embed\/|v\/)|ytimg\.com\/vi\/)(.+?)(?:[^-a-zA-Z0-9]|$)/;
const TITLE_MIN_LENGTH = 2;
const text_MIN_LENGTH = 4;

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
        models.Article.create({
          title: title,
          text: text,
          videoId: youtubeUrl,
          image: image,
          UserId: userFound.id,
          GameId: '1',
        })
        .then(function(newArticle) {
          if (newArticle) {
            return res.status(201).json(newArticle);
          } else {
            return res.status(500).json({'error': 'cannot post article'});
          }
        })
      } else {
        res.status(404).json({'error': 'user not found'});
      }
    }).catch(function(err) {
      return res.status(500).json({'error': 'unable to verify user'});
    })
  },
};
