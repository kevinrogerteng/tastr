'use strict';

(function(angular){
  angular
    .module('Tastr')
    .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider){

      // any other unknown routes, user will be redirected to the home page
      $urlRouterProvider.otherwise('/');


    }

})(angular);
