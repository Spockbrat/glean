controllers.controller('DonorCtrl',[
	'$scope',
	'DonorService',
function($scope, DonorService) {
	$scope.map = {
		// Chicago
		center : {
			latitude : 41.8819,
			longitude : -87.6278
		},
		zoom : 10
	};
	$scope.donors = DonorService.query();

} ]);