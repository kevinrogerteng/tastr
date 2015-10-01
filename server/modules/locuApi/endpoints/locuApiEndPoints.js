'use strict';

module.exports = function(app){
  var locuService = require('../locuMiddleware.js');

  app.get('/api/locu/search', function(req, res){
    locuService.queryRestaurant(req, res)
      .then(function(response){
        res.send(response);
      })
      .catch(res.error)
      .done();
  });
};