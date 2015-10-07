'use strict';

var requestify = require('requestify'),
    config = require('../../config.js'),
    apiKey = config.locu_api_key,
    Q = require('q'),
    logger = require('winston');


var queryRestaurant = function(req, res){
  //validate the request and see if you have enough information to do a search
  function validateRequest(){
    var deferred = Q.defer();

    if (req.params.name && req.params.location) {
      deferred.resolve();
    } else {
      deferred.reject();
    }

    return deferred.promise;
  }

  function queryLocuApi(){

    var deferred = Q.defer();
    var requestParams = {
        'api_key' : apiKey,
        'fields' : ['name', 'location', 'contact', 'menu_url', 'menus', 'categories'],
        'venue_queries' : [{
          'name' : req.params.name,
          'location' : {
            'locality' : req.params.location
          }, 
          'categories': {
            'name' : 'Restaurants',
            'str_id' : 'restaurants'
          },
          'menus' : { '$present' : true }
        }],
      };
    var url = 'https://api.locu.com/v2/venue/search';
    requestify.post(url, requestParams).then(function(response){
      deferred.resolve(response.getBody());
    }, function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  }

  return validateRequest().then(queryLocuApi);
};

module.exports = {
  queryRestaurant : queryRestaurant
};