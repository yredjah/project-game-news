/* eslint-disable*/
const express = require('express');
const usersCtrl = require('../routes/usersCtrl');
const articlesCtrl = require('../routes/articlesCtrl');

const server = express();
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

exports.router = (function() {
  var apiRouter = express.Router();

  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
  apiRouter.route('/articles/addArticle/').post(articlesCtrl.addArticles);

  return apiRouter;
;})();
