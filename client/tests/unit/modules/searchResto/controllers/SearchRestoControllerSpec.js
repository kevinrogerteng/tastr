'use strict';

describe('SearchRestoController', function(){
  var $controller, scope;

  beforeEach(module('SearchRestoModule'));

  beforeEach(inject(function(_$controller_, _$rootScope_){
    $controller = _$controller_;
    scope = _$rootScope_.$new();

    $controller('SearchRestoController', {$scope: scope});
  }));

  it('should have $scope.location as San Francisco', function(){
    scope.init();
    expect(scope.location).to.equal('San Francisco');
  });
});