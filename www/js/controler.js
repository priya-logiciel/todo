(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout) {
			$scope.show = function() {

				// Show the action sheet
				var hideSheet = $ionicActionSheet.show({
					buttons: [
						{ text: '<b>Share</b> This' },
						{ text: 'Move' }
					],
					destructiveText: 'Delete',
					titleText: 'Modify your album',
					cancelText: 'Cancel',
					cancel: function() {
							 // add cancel code..
						 },
					buttonClicked: function(index) {
						return true;
					}
				});

			};

			//Show a backdrop for one second
			$scope.action = function() {
				$ionicBackdrop.retain();
				$timeout(function() {
					$ionicBackdrop.release();
				}, 1000);
			};

			// Execute action on backdrop disappearing
			$scope.$on('backdrop.hidden', function() {
				// Execute action
			});

			// Execute action on backdrop appearing
			$scope.$on('backdrop.shown', function() {
				// Execute action
			});
		}

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})(); angular.module('mySuperApp', ['ionic'])
	.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
	
	// Triggered on a button click, or some other target
	$scope.showPopup = function() {
	  $scope.data = {};
	
	  // An elaborate, custom popup
	  var myPopup = $ionicPopup.show({
		template: '<input type="password" ng-model="data.wifi">',
		title: 'Enter Wi-Fi Password',
		subTitle: 'Please use normal things',
		scope: $scope,
		buttons: [
		  { text: 'Cancel' },
		  {
			text: '<b>Save</b>',
			type: 'button-positive',
			onTap: function(e) {
			  if (!$scope.data.wifi) {
				//don't allow the user to close unless he enters wifi password
				e.preventDefault();
			  } else {
				return $scope.data.wifi;
			  }
			}
		  }
		]
	  });
	
	  myPopup.then(function(res) {
		console.log('Tapped!', res);
	  });
	
	  $timeout(function() {
		 myPopup.close(); //close the popup after 3 seconds for some reason
	  }, 3000);
	 };
	
	 // A confirm dialog
	 $scope.showConfirm = function() {
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Consume Ice Cream',
		 template: 'Are you sure you want to eat this ice cream?'
	   });
	
	   confirmPopup.then(function(res) {
		 if(res) {
		   console.log('You are sure');
		 } else {
		   console.log('You are not sure');
		 }
	   });
	 };
	
	 // An alert dialog
	 $scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Don\'t eat that!',
		 template: 'It might taste good'
	   });
	
	   alertPopup.then(function(res) {
		 console.log('Thank you for not eating my delicious ice cream cone');
	   });
	 };
	});