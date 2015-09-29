'use strict';

module.exports = function(app){
  var locuService = require('../locuMiddleware.js');

  app.get('/api/locu/search', function(req, res){
    // locuService.queryRestaurant(req, res).then(res.sucess).catch(res.error).done();
    locuService.queryRestaurant(req, res).then(function(response){
      console.log(response.success);
    }).done();
  });
};