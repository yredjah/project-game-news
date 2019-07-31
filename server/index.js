// imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

const server = express();

//body parser config
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

// routes
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Hello</h1>');
});

server.use('/api/', apiRouter);

server.listen(3000, function() {
    console.log('server start');
});
