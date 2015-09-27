'use strict';

// Manually bootstrap the AngularJS App

(function(angular){
  angular.element(document).ready(function(){
    angular.bootstrap('html', ['Tastr']);
  });
})(angular);