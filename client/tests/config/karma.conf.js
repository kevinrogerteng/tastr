'use strict';

module.exports = function(config){
  var clientTest = 'client/tests';
  var configuration = {
    frameworks: ['mocha'],
    port: 9876,
    colors: true,
    browsers: ['Chrome'],
    autoWatch: true,
    captureTimeout: 60000,
    singleRun: false
    // browserDisconnectTimeout: 2000,
    // browserDisconnectTolerance: 0,
    // browserNoActivityTimeout: 4000
  };

  configuration.files = [
    '../../../node_modules/chai/chai.js',
    '../../bower_components/jquery/dist/jquery.js',
    '../../bower_components/angular/angular.js',
    '../../bower_components/angular-resource/angular-resource.js',
    '../../bower_components/angular-sanitize/angular-sanitize.js',
    '../../bower_components/angular-mocks/angular-mocks.js',
    '../../bower_components/angular-ui-router/release/angular-ui-router.js',
    '../../bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    '../../bower_components/underscore/underscore.js',
    '../../modules/**/*Module.js',
    '../../modules/**/*.js',
    '../unit/**/*Spec.js',
    './chai.conf.js'
  ];

  config.set(configuration);
};