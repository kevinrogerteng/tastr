'use strict'
require('dotenv').load();

var config = {
  port: 3000,
  LOCU_API_KEY: process.env.LOCU_API_KEY
};

module.exports = config;