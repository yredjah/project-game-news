/* eslint-disable*/
const express = require('express');
const usersCtrl = require('../routes/usersCtrl');
const articlesCtrl = require('../routes/articlesCtrl');
const mailerCtrl = require('../routes/mailerCtrl');
const commentaryCtrl = require('../routes/commentaryCtrl');
const fieldUploadCtrl = require('../routes/filedUploadCtrl');
const plateformCtrl = require('../routes/plateformCtrl');
const genresCtrl = require('../routes/genresCtrl');
const fileUpload = require('express-fileupload');
const logger = require('morgan');
const cors = require('cors');

const server = express();

server.use(logger('dev'));
server.use(cors());
server.use(fileUpload());
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header( 'Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  //intercepts OPTIONS method
if ('OPTIONS' === req.method) {
  //respond with 200
  res.send(200);
}
else {
//move on
  next();
}
});

exports.router = (function() {
  var apiRouter = express.Router();

  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/selectPreferencies/').post(usersCtrl.selectPreferencies);
  apiRouter.route('/users/getPreferencies/').post(usersCtrl.getPreferencies);
  apiRouter.route('/users/setPreference/').post(usersCtrl.setPreference);
  apiRouter.route('/users/delPreference/').post(usersCtrl.delPreference);
  apiRouter.route('/articles/addArticle/').post(articlesCtrl.addArticles);
  apiRouter.route('/articles/listArticle/').get(articlesCtrl.listArticles);
  apiRouter.route('/articles/getOne/').post(articlesCtrl.getOne);
  apiRouter.route('/articles/addLike/').post(articlesCtrl.addLike);
  apiRouter.route('/articles/addDislike/').post(articlesCtrl.addDislike);
  apiRouter.route('/articles/sortArticlesByPlateform/').post(articlesCtrl.sortArticlesByPlateform);
  apiRouter.route('/articles/sortArticlesByGenre/').post(articlesCtrl.sortArticlesByGenre);
  apiRouter.route('/articles/getArticlesByPreferencies/').get(articlesCtrl.getArticlesByPreferencies);
  apiRouter.route('/articles/sortArticleByGame/').post(articlesCtrl.sortArticleByGame);
  apiRouter.route('/mailer/').post(mailerCtrl.mailer);
  apiRouter.route('/commentary/').post(commentaryCtrl.createComment);
  apiRouter.route('/commentary/getCom').post(commentaryCtrl.getCommentary);
  apiRouter.route('/upload/').post(fieldUploadCtrl.upload);
  apiRouter.route('/plateform/getAll').get(plateformCtrl.getAll);
  apiRouter.route('/genre/getAll').get(genresCtrl.getAll);

  return apiRouter;
;})();
