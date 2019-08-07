/* eslint-disable*/
const express = require('express');
const usersCtrl = require('../routes/usersCtrl');
const articlesCtrl = require('../routes/articlesCtrl');
const mailerCtrl = require('../routes/mailerCtrl');
const fieldUploadCtrl = require('../routes/filedUploadCtrl');
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
  apiRouter.route('/articles/addArticle/').post(articlesCtrl.addArticles);
  apiRouter.route('/articles/listArticle/').get(articlesCtrl.listArticles);
  apiRouter.route('/mailer/').get(mailerCtrl.mailer);
  apiRouter.route('/upload/').post(fieldUploadCtrl.upload);

  return apiRouter;
;})();
