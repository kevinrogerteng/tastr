'use strict'

// conifgure the app

var __documentRoot = __dirname;
GLOBAL.include = function(file){
  return require(__documentRoot + '/' + file);
};

var express = require('express');
var mongoose = require('mongoose');
var serveStatic = require('serve-static');
var config = require('./config');
var fs = require('fs');

mongoose.connect('mongodb://localhost/tastr');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('mongod instance is running');
});

var app = express();

// an automated way of setting up endpoints, rather than having it all cluttered in one expressjs file
configureEndpoints(__dirname + '/modules');

function configureEndpoints(path) {
  fs.readdirSync(path).forEach(function (file) {
    var filePath = path + '/' + file;
    var fileInfo = fs.statSync(filePath);
    if (fileInfo.isDirectory()) {
      configureEndpoints(filePath);
    }
    if (fileInfo.isFile()) {
      if (filePath.indexOf('endpoints') >= 0) {
        require(filePath)(app);
      }
    }
  });
}

// setup view to use HTML;
// app.set('views', path.join(__dirname, 'views'));
app.locals.title = "Tastr";
app.locals.email =  "kevin.roger.teng@gmail.com";
app.set('view engine', 'html');

//set the static folder
app.use(serveStatic(__dirname + '/../client', {'index': ['index.html']}));

module.exports = app;