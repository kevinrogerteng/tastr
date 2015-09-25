'use strict'

// conifgure the app

var __documentRoot = __dirname;
GLOBAL.include = function(file){
  return require(__documentRoot + '/' + file);
};

var express = require('express');
var mongoose = require('mongoose');
var serveStatic = require('serve-static');

var app = express();

// setup view to use HTML;
// app.set('views', path.join(__dirname, 'views'));
app.locals.title = "Tastr";
app.locals.email =  "kevin.roger.teng@gmail.com";
app.set('view engine', 'html');

//set the static folder
app.use(serveStatic(__dirname + '/../client', {'index': ['index.html']}));

module.exports = app;