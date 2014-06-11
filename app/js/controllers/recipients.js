'use strict';

controllers.controller('RecipientCtrl',
	[ '$scope', 'RecipientService', function($scope, RecipientService) {
		$scope.map = {
			center : {
				latitude : 41.8819,
				longitude : -87.6278
			},
			zoom : 10
		};

		$scope.recipients = RecipientService.query();

	} ]);