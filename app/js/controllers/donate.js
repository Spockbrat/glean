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

	$scope.donorData = [
		{
			key: "Donor",
			values: [
				["Whole Foods", 197 ],
				["Treasure Island" , 89 ],
				["Marianos" , 67 ],
				["Dominicks" , 90 ],
				["Chipotle" , 45 ],
				["Starbucks" , 23 ]
			]
		}
	];

	$scope.targets =  {
		 "title": "Donations",
		 "subtitle": "(lbs)",
		 "ranges": [150, 225, 300],
		 "measures": [220],
		 "markers": [250]
	 };

	$scope.randomData = function (points) {
		  var data = [],
			  shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
			  groups = ["Chicago","Boston","New York","San Francisco","Washington D.C"],
			  random = d3.random.normal();

		  for (i = 0; i < groups.length; i++) {
			data.push({
			  key: groups[i],
			  values: []
			});

			for (j = 0; j < points; j++) {
			  data[i].values.push({
				x: Math.floor((Math.random() * 365) + 1)
			  , y: Math.floor((Math.random() * 100) + 1)
			  , size: Math.floor((Math.random() * 200) + 1)   //Configure the size of each scatter point
			  , shape: (Math.random() > 0.95) ? shapes[j % 2] : "circle"  //Configure the shape of each scatter point.
			  });
			}
		  }
		  return data;
		}

	$scope.exampleData = $scope.randomData(40);

  }]);