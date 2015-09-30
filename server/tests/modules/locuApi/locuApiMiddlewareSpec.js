'use strict';

(function(){
  var chai = require('chai'),
      mongoose = require('mongoose'),
      mockgoose = require('mockgoose'),
      rewire = require('rewire'),
      middleware = rewire('../../../modules/locuApi/locuMiddleware.js'),
      mockRestaurants = require('../../mocks/fixtures/restaurantQuery.js'),
      sinon = require('sinon'),
      sinonChai = require('sinon-chai'),
      httpMock = require('node-mocks-http'),
      Q = require('q');

  mockgoose(mongoose);

  var expect = chai.expect;

  describe('Locu API Middleware', function(){
    describe('sample spec test', function(){

      it('should return a 200 - restaurantQuery', function(){
        var req = httpMock.createRequest({
          method: 'GET'
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
          get: postApiStub
        };

        middleware.__set__('requestify', requestMock);
        middleware.queryRestaurant(req, res).then(function(response){
          expect(true).to.equal(false);
          expect(response.status).to.equal('success');
        });
      });

      it('should fail', function(){
        expect(false).to.equal(false);
      });

    });
  });
})();