'use strict';

/* Services */
angular.module('myApp.services', []).
  value('version', '0.1')

.factory('DonorService', function ($resource) {
	 return $resource('donors.json');
})
.factory('VolunteerService', function ($resource) {
	return $resource('volunteers.json');
})
.factory('RecipientService', function ($resource) {
	return $resource('recipients.json');
})
.factory('DonationService', function ($resource) {
	return $resource('donations.json');
});