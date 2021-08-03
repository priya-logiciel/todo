(function(){
	'use strict';	
		var DemoCtrl = function($scope,$ionicPopup)  {
			$scope.dataToShow=''	

			$scope.datalist = [
				
				{
					id:'1',
					firstName: 'Mayank',
					dob: '12-12-1990',
					firstCompanyName: 'LS',
					lastName: 'Kumar',
					salary: '250000',
					age: '31',
				},
				{  
					id:'2',
					firstName: 'Tajinder',
					dob: '12-12-1993',
					firstCompanyName: 'Promatics',
					lastName: 'Singh',
					salary: '2500000',
					age: '28',
				},
				{   
					id:'3',
					firstName: 'Varsha',
					dob: '12-12-1995',
					firstCompanyName: 'LS',
					lastName: 'Panday',
					salary: '2500',
					age: '20',
				},
				{
					id:'4',
					firstName: 'Pawan',
					dob: '07-01-1995',
					firstCompanyName: 'LS',
					lastName: 'Arora',
					salary: '550000',
					age: '25',
				},
				{
					id:'5',
					firstName: 'Anuj',
					dob: '12-11-1997',
					firstCompanyName: 'LS',
					lastName: 'Singh',
					salary: '2500000',
					age: '29',
				},
			]
			$scope.showPopup = function() {
				
				$scope.data=$scope.datalist.find(function(e) {
					return e.id == $scope.dataToShow
				})
				
				console.log($scope.data)
				$ionicPopup.show({
					title:"User Detaile",
					templateUrl:"templates/showDatapopup.html",
					scope: $scope,
					buttons:  [
					  { text: 'Cancel' },
				    ]
				});  
					
			}
			 //DELETE FUNCTION
			$scope.deleteData = function (item){		
				var dataToDelete;
				$scope.datalist.forEach(function(p, index){
					if(p.id == $scope.dataToShow){
					  dataToDelete = index;
					}
				});
				console.log(dataToDelete)
				$scope.datalist.splice(dataToDelete, 1);
			}
				
		}	       
		
	
	
			DemoCtrl.$inject = ['$scope','$ionicPopup' ]
			angular
				.module('starter')
				.controller('MainCtrl',DemoCtrl);
})(); 