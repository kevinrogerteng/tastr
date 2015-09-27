'use strict'

var app = require('./app');
var config = require('./config');
var logger = require('winston');

app.listen(config.port);

logger.log("info", "this is an info");
console.log(config.LOCU_API_KEY)
logger.log("info", "Server is running at localhost:" + config.port);
module.exports = app;
