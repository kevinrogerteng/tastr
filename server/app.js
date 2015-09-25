'use strict'

// conifgure the app

var __documentRoot = __dirname;
GLOBAL.include = function(file){
  return require(__documentRoot + '/' + file);
};

var express = require('express');
var mongoose = require('mongoose');

var app = express();

// setup view to use HTML;
// app.set('views', path.join(__dirname, 'views'));
app.locals.title = "Tastr";
app.locals.email =  "kevin.roger.teng@gmail.com";
app.set('view engine', 'html');

app.get('/', function(req, res){
  console.log("touch route directory");
  res.send('hello world');
});

module.exports = app;