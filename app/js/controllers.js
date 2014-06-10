'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('DonorCtrl', ['$scope', 'DonorService', function($scope, DonorService) {
	  $scope.map = {
	      //Chicago
	      center: {
	          latitude: 41.8819,
	          longitude: -87.6278
	      },
	      zoom: 10
	  };

	$scope.options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,

        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth : 24,

        //The percentage of the chart that we cut out of the middle.
        percentageInnerCutout : 50,

        //Boolean - Whether we should animate the chart
        animation : true,

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect
        animationEasing : "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,

        //Function - Will fire on animation completion.
        onAnimationComplete : null
    };

	$scope.chart = {
		labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
		datasets : [
			{
				fillColor : "rgba(151,187,205,0)",
				strokeColor : "#e67e22",
				pointColor : "rgba(151,187,205,0)",
				pointStrokeColor : "#e67e22",
				data : [4, 3, 5, 4, 6]
			},
			{
				fillColor : "rgba(151,187,205,0)",
				strokeColor : "#f1c40f",
				pointColor : "rgba(151,187,205,0)",
				pointStrokeColor : "#f1c40f",
				data : [8, 3, 2, 5, 4]
			}
		],
	};

	  //$scope.donors = DonorService.$query();
		$scope.donors = [{
		  name: "Whole Foods",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "312-454-5343"
		}, {
		  name: "Whole Foods",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "312-454-5343"
		}, {
		  name: "Whole Foods",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "312-454-5343"
		}];


  }]).controller('RecipientCtrl', ['$scope', function($scope) {
	  $scope.map = {
	      center: {
	          latitude: 41.8819,
	          longitude: -87.6278
	      },
	      zoom: 10
 	};

	$scope.recipients = [{
	  name: "Lakeview Pantry",
	  address: "505 Lake Shore Dr, Chicago",
	  contact: "312-454-5343"
	}, {
	  name: "St. Vincent de Paul Center Food Pantry",
	  address: "2145 N Halsted St, Chicago, IL 60614",
	  contact: "312-454-5343"
	}, {
	  name: "Emergency Assistance Program",
	  address: "721 N LaSalle Dr, Chicago, IL 60654",
	  contact: "312-454-5343"
	}];

  }]).controller('FoodCtrl', ['$scope', function($scope) {

	$scope.categories = [{
	  name: "Dairy",
	  image: "dairy.jpg"
	},{
	  name: "Fruits",
	  image: "fruits.jpg"
	 }, {
	  name: "Grains",
	  image: "grains.jpg"
	 }, {
	  name: "Meat",
	  image: "meat.jpg"
	}, {
	  name: "Sweets",
	  image: "sweets.jpg"
	}, {
	  name: "Vegetables",
	  image: "veggies.jpg"
	}, {
	  name: "Water",
	  image: "water.jpg"
	}];
  }]).controller('DonateCtrl', ['$scope', function($scope) {
	  $scope.donations = [];
	  $scope.add = function(added){
		  var donation = {};
		  angular.copy(added, donation);
		  $scope.donations.push(donation);
	  }
  }]).controller('VolunteerCtrl', ['$scope', 'DonorService', function($scope, DonorService) {

	  	  $scope.map = {
	  	      center: {
	  	          latitude: 41.8819,
	  	          longitude: -87.6278
	  	      },
	  	      zoom: 10
	   	};

		$scope.volunteers = [{
		  name: "Ashish Pujari",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "ashis_pujari@yahoo.com"
		}, {
		  name: "Harish Naik",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "312-454-5343"
		}, {
		  name: "Brittany VanPutten",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "Brittanyvanputten@gmail.com"
		},{
		  name: "Sam Pedley",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "sjpeds@gmail.com"
		},{
		  name: "Scott Beckmeyer",
		  address: "505 Lake Shore Dr, Chicago",
		  contact: "sbeckmeyer@gmail.com"
		}];
  }]);