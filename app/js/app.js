'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'google-maps',
  'angles'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/donors', {templateUrl: 'partials/donors.html', controller: 'DonorCtrl'});
  $routeProvider.when('/receivers', {templateUrl: 'partials/receivers.html', controller: 'ReceiverCtrl'});
  $routeProvider.when('/volunteers', {templateUrl: 'partials/volunteers.html', controller: 'VolunteerCtrl'});
  $routeProvider.when('/donate', {templateUrl: 'partials/donate.html', controller: 'DonorCtrl'});
  $routeProvider.when('/ddash', {templateUrl: 'partials/donorsDash.html', controller: 'DonorCtrl'});
  $routeProvider.when('/rdash', {templateUrl: 'partials/receiversDash.html', controller: 'DonorCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
