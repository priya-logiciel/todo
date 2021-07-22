(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout, $ionicPopup, $ionicPopover, $ionicModal, $rootScope, api) {
​
			$scope.data = [];
			
			api.getData().then(function(response){
				if(response) {
					$scope.data = response;
				}
			},function(err){
				console.log(err)
			})
​
		}
​
		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicPopover', '$ionicModal', '$rootScope', 'api'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})();