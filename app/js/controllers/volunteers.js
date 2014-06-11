controllers.controller('VolunteerCtrl',
	[ '$scope', 'VolunteerService', function($scope, VolunteerService) {

		$scope.map = {
			center : {
				latitude : 41.8819,
				longitude : -87.6278
			},
			zoom : 10
		};

		$scope.volunteers = VolunteerService.query();
	} ]);