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
  'nvd3ChartDirectives',
  'trNgGrid'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/donors', {templateUrl: 'partials/donors.html', controller: 'DonorCtrl'});
  $routeProvider.when('/recipients', {templateUrl: 'partials/recipients.html', controller: 'RecipientCtrl'});
  $routeProvider.when('/volunteers', {templateUrl: 'partials/volunteers.html', controller: 'VolunteerCtrl'});
  $routeProvider.when('/donate', {templateUrl: 'partials/donate.html', controller: 'DonorCtrl'});
  $routeProvider.when('/ddash', {templateUrl: 'partials/donorsDash.html', controller: 'DonorCtrl'});
  $routeProvider.when('/rdash', {templateUrl: 'partials/recipientsDash.html', controller: 'DonorCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
