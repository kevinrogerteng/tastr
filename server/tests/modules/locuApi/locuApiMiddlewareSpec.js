'use strict';

(function(){
  var chai = require('chai');


  var expect = chai.expect;

  describe('Locu API Middleware', function(){
    describe('sample spec test', function(){

      it('should return truthy', function(){
        expect(true).to.equal(true);
      });

      it('should fail', function(){
        expect(true).to.equal(false);
      });

    });
  });
})();