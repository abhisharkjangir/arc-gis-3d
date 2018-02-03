'use strict';

/**
 * @ngdoc overview
 * @name arcGisApp
 * @description
 * # arcGisApp
 *
 * Main module of the application.
 */
angular.module('arcGisApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'mainCtrl'
  }).otherwise({redirectTo: '/'});
  $locationProvider.html5Mode({enabled:true});
});
