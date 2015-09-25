'use strict'
// this file contains winston logger configurations 
// documentation - https://github.com/winstonjs/winston


var consoleTransports = new winston.transports.Console();

var transporterList = [consoleTransports];

// initialize winston logger with configurations
var winstonLogger = new(winston.Logger)({
  transports: transporterList
});