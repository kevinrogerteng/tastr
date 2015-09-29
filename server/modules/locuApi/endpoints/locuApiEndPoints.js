'use strict';

module.exports = function(app){
  var locuService = require('../locuMiddleware.js');

  app.get('/api/locu/search', function(req, res){
    locuService.queryRestaurant(req, res)
      .then(function(response){
        console.log(response.status);
      })
      .catch(res.error)
      .done();
  });
};