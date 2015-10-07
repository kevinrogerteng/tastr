'use strict';

(function(){
  var chai = require('chai'),
      mongoose = require('mongoose'),
      mockgoose = require('mockgoose'),
      rewire = require('rewire'),
      middleware = rewire('../../../modules/locuApi/locuMiddleware.js'),
      mockRestaurants = require('../../mocks/fixtures/restaurantQueryPayload.js'),
      sinon = require('sinon'),
      sinonChai = require('sinon-chai'),
      httpMock = require('node-mocks-http'),
      Q = require('q');

  mockgoose(mongoose);

  var expect = chai.expect;

  describe('Locu API Middleware', function(){
    describe('Test Locu Api Payload', function(){

      it('should return a 200 - restaurantQuery', function(done){
        var req = httpMock.createRequest({
          method: 'GET',
          params: {
            'name' : 'Gary Danko',
            'location' : 'San Francisco'
          }
        });

        var res = httpMock.createResponse();
        res.statusCode = 200;

        var response = {
          getBody:function(){
            return mockRestaurants;
          }
        };

        var postApiStub = sinon.stub().returns(Q.resolve(response));
        var requestMock = {
          post: postApiStub
        };

        middleware.__set__('requestify', requestMock);

        return middleware.queryRestaurant(req, res).then(function(response){
          expect(response.status).to.equal('success');
          expect(response.venues.length).to.equal(2);
          expect(response.venues[0].location.locality).to.equal('San Francisco');
          expect(response.venues[0].menus).to.exist; /* jshint ignore:line */
          done();
        }).done();
      });
    });
  });
})();