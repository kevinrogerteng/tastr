'use strict'
require('dotenv').load();

var config = {
  
  port: 3000,
  locu_api_key: process.env.LOCU_API_KEY || "no_api_key",
  db_config: {
    'host': process.env.DB_HOST || 'localhost',
    'username': process.env.DB_USERNAME || 'root',
    'password': process.env.DB_PASSWORD || 'password'
  }

};

module.exports = config;