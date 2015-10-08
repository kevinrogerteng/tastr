'use strict';

(function(angular){
  angular
    .module('SearchRestoModule')
    .controller('SearchRestoController', SearchRestoController);

    SearchRestoController.$inject = ['$scope'];

    function SearchRestoController($scope){

      $scope.init = function(){
        $scope.location = 'San Francisco';
      }
    }
})(angular);