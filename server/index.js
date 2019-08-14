/* eslint-disable */

// imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;
const fileUpload = require('express-fileupload');
const logger = require('morgan');
const cors = require('cors');


const server = express();

//body parser config
server.use(logger('dev'));
server.use(cors());
server.use(fileUpload({createParentPath: true }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
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


// routes
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Hello</h1>');
});

server.use('/api/', apiRouter);

server.listen(3000, function() {
    console.log('server start');
});
