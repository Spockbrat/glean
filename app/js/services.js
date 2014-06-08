'use strict';

/* Services */
angular.module('myApp.services', []).
  value('version', '0.1')

/**
 * Trade Plan Service
 */
.factory('DonorService', function ($resource, $http,  $q) {
	 return $http.get('donors.json');
});