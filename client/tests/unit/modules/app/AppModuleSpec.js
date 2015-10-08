'use strict';

(function(angular){

  describe("Tastr Module", function(){
    beforeEach(module('AppModule'));
    it('should define angular', function(){
      expect(angular).to.be.defined; /* jshint ignore:line */
    });
  });

})(angular);
