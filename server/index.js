// import 
var express = require('express');

// instantiate server 
var server = express(); 

// configure routes 
server.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Bonjour voici le server</h1>')
});

// Launch server
server.listen(3000, function(){
  console.log('Server en écoute :)');
});
