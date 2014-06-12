controllers.controller('DonateCtrl', ['$scope', 'DonationService', function($scope, DonationService) {
	$scope.donations = DonationService.query();
	$scope.add = function(added){
		  var donation = {};
		  angular.copy(added, donation);
		  $scope.donations.push(donation);
	}

	$scope.categoryData = [
		{
			key: "Category",
			values: [
				["Fruits", 89 ],
				["Meat" , 16 ],
				["Vegetables" , 56 ],
				["Grains" , 65 ],
				["Dairy" , 28 ],
				["CPG" , 10 ]
			]
		}
	];

	$scope.recipientData = [
		{
			key: "Recipient",
			values: [
				["LakeView ", 197 ],
				["River North " , 89 ],
				["Streeterville " , 67 ],
				["South Loop " , 90 ],
				["Boyztown " , 45 ],
				["Oakbrook " , 23 ]
			]
		}
	];

  }]);