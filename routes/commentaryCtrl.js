/* eslint-disable */
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');

module.exports = {
  createComment: function(req, res) {
  // getting header
  const headerAuth  = req.headers['authorization'];
  const userId      = jwtUtils.getUserId(headerAuth);
  const articleId = req.body.ArticleId;
  // Params
  const commentary = req.body.commentary;


    if (userId < 0)
      return res.status(400).json({ 'error': 'wrong token' });

    models.User.findOne({
      attributes: ['id'],
      where: {id: userId},
    }).then(function(userFound) {
      if(userFound) {
          models.Commentary.create({
          commentary: commentary,
          UserId: userFound.id,
          ArticleId: articleId,
        }).then(function (newComment) {
          return res.status(201).json(newComment);
        }).catch(function(err) {
          return res.status(500).json({'error': 'unable to creat new comment', err});
        });
      } else {
        return res.status(404).json({'error': 'user not found'});
      }
    }).catch(function(err) {
      return res.status(500).json({'error': 'user was not found', err});
    })
  },
  getCommentary: function(req, res) {

    const articleId = req.body.articleId;

    models.Commentary.findAll({
      where: {ArticleId: articleId},
      include: [{
        model: models.User,
        attributes: ['userName', 'avatar'],
      }]
    }).then(function(commentary) {
      return res.status(200).json(commentary);
    }).catch(function(err) {
      res.status(500).json({ 'error': 'cannot find commentary', err });
    });
  },
};
