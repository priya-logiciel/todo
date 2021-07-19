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
		    $scope.dataToAdd.SecondName= '';
			console.log($scope.dataToAdd)
		  
	    }
		// delete function this remove the selected table row
		$scope.deleteRow= function (i) {
			$scope.list.splice(i, 1);
			SecondName: $scope.dataToAdd.SecondName
		};
	 
		
		
	}		
		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicLoading', '$ionicPopover', '$ionicModal','$ionicHistory'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})(); 
	   

