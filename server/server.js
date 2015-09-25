'use strict'

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, "127.0.0.1");

// console.log('Server running at http://127.0.0.1:1337/');
// console.log(__dirname);

var app = require('./app');
var config = require('./config');
// var logger = require('winston');

app.listen(config.port);
console.log('Server is running at localhost:' + config.port);
module.exports = app;
