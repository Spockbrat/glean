controllers.controller('DonateCtrl', ['$scope', function($scope) {
	  $scope.donations = [];
	  $scope.add = function(added){
		  var donation = {};
		  angular.copy(added, donation);
		  $scope.donations.push(donation);
	  }
  }]);