'use strict';

var requestify = require('requestify'),
    config = require('../../config.js'),
    apiKey = config.locu_api_key,
    Q = require('q'),
    logger = require('winston');


var queryRestaurant = function(req){
  //validate the request and see if you have enough information to do a search
  function validateRequest(){
    return Q.promise(function(resolve, reject){
      if (true) {
        resolve({success: 'successful!'});
      } else {
        reject();
      }
    });
  } 

  function queryLocuApi(validatedReq){
    return Q.promise(function(resolve, reject){
      var requestParams = {
        'api_key' : apiKey,
        'fields' : ['name', 'location', 'contact'],
        'venue_queries' : [{
          'name' : 'Gary Danko'
        }]
      }

      var url = 'https://api.locu.com/v2/venue/search';

      requestify.post(url, requestParams).then(function(response){
        console.log(response);
        resolve(reponse);
      }, function(error){
        console.log(error);
        reject(error);
      })

    });
  }

  return validateRequest().then(queryLocuApi);
};

module.exports = {
  queryRestaurant : queryRestaurant
};