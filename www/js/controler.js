(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout,$ionicPopup, $ionicLoading, $ionicPopover, $ionicModal ) {
			$scope.dataToShow = {};

			$scope.list=[{
				  firstname: 'Priyanka'
			},{
				firstname: 'Vanshu'
			}]
			 $scope.showData= function(item){
				 $scope.dataToShow=item
			 }

		
		$scope.removedata = function() {
			$scope.dataToShow ={};
		}
	}		
		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicLoading', '$ionicPopover', '$ionicModal','$ionicHistory'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})(); 
	