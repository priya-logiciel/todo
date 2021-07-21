(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout,$ionicPopup, $ionicLoading, $ionicPopover, $ionicModal ) {
			$scope.dataToShow = {};
			 
			$scope.dataToAdd = {
				SecondName: ''
			};

			$scope.list = [{

				  SecondName: 'Suparnya'
			},{
				SecondName: 'Saparsh'
			}]
			$scope.names = [
				'sonam',
				'priya',
				'sonu',
				'mehga',
				'depali',
				'sourav',
				'manshi',
				'hina',
				'Kajal'
			];
			$scope.value= [
				'2222-22-22'
			];
			 //using user defined filter (show value divided by 3)
			 $scope.studentlist ={
				 {name:'prince',value:1},	   
				 {name:'prince',value:2},	   
				 {name:'prince',value:3},	   
				 {name:'prince',value:4},	   
				 {name:'prince',value:5},	   
				 {name:'prince',value:6},	   
				 {name:'prince',value:7},	   
				 {name:'prince',value:8},	   
				 {name:'prince',value:9},	   
				 {name:'prince',value:10},	   
				 {name:'prince',value:11},	   
			 ]
		    $scope.removedata = function() {
				$scope.dataToShow ={};
			}

			$scope.showData= function(item){
				$scope.dataToShow  =item;
			}
			
            $scope.addToList = function() {
				$scope.list.push({
					SecondName: $scope.dataToAdd.SecondName
				})
				$scope.dataToAdd.SecondName= " ";
				console.log($scope.dataToAdd)
		  	}

			// delete function this remove the selected table row
			$scope.deleteRow= function (i) {
				$scope.list.splice(i, 1);
			};
					
		
						

}

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicLoading', '$ionicPopover', '$ionicModal','$ionicHistory'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})(); 
	   

