(function(){
	'use strict';	
		var DemoCtrl = function($scope)  {
			$scope.names = [
				
				{
					firstName: 'Mayank',
					dob: '12-12-1990',
					gender: 'male',
					hobbies: 'Gaming',
					firstCompanyName: 'LS',
					lastName: 'Kumar',
					salary: '250000',
					age: '31',
				},
				{
					firstName: 'Tajinder',
					dob: '12-12-1993',
					gender: 'male',
					hobbies: 'Gaming, Googling',
					firstCompanyName: 'Promatics',
					lastName: 'Singh',
					salary: '2500000',
					age: '28',
				},
				{
					firstName: 'Varsha',
					dob: '12-12-1995',
					gender: 'female',
					hobbies: 'Singing',
					firstCompanyName: 'LS',
					lastName: 'Panday',
					salary: '2500',
					age: '20',
				},
				{
					firstName: 'Pawan',
					dob: '07-01-1995',
					gender: 'male',
					hobbies: 'Gardning',
					firstCompanyName: 'LS',
					lastName: 'Arora',
					salary: '550000',
					age: '25',
				},
				{
					firstName: 'Anuj',
					dob: '12-11-1997',
					gender: 'male',
					hobbies: 'Gaming',
					firstCompanyName: 'LS',
					lastName: 'Singh',
					salary: '2500000',
					age: '29',
				},
			]
			  $scope.orderByMe = function (x) {
				$scope.myOrderBy = x;
			  };
	}
			DemoCtrl.$inject = ['$scope' ]
			angular
				.module('starter')
				.controller('MainCtrl',DemoCtrl);
})(); 
	   

