'use strict';

controllers.controller('FoodCtrl', [ '$scope', function($scope) {
		$scope.categories = [ {
			name : "Dairy",
			image : "dairy.jpg"
		}, {
			name : "Fruits",
			image : "fruits.jpg"
		}, {
			name : "Grains",
			image : "grains.jpg"
		}, {
			name : "Meat",
			image : "meat.jpg"
		}, {
			name : "Sweets",
			image : "sweets.jpg"
		}, {
			name : "Vegetables",
			image : "veggies.jpg"
		}, {
			name : "Water",
			image : "water.jpg"
		} ];
	} ]);