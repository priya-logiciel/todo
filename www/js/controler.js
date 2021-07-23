(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout,$ionicPopup, $ionicLoading, $ionicPopover, $ionicModal,$ionicHistory,$location,hexafy,counts, apiService)  {
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
			 $scope.customerlist =[
				 {name:'prince',value:1},	   
				 {name:'priyanka',value:2},	   
				 {name:'priya',value:3},	   
				 {name:'varsha',value:4},	   
				 {name:'riya',value:5},	   
				 {name:'pihu',value:6},	   
				 {name:'pinka',value:7},	   
				 {name:'depali',value:8},	   
				 {name:'shabu',value:9},	   
				 {name:'pankaj',value:10},	   
				 {name:'nikhil',value:11},	   
			 ]
		    $scope.removedata = function() {
				$scope.dataToShow ={};
			}
			   //Hexafy value
			   $scope.hex = hexafy.myFunc(255);

			   //array value
			   $scope.counts = [255, 251, 200];
               //get data
			   $scope.data = [];
            apiService.getDataFromApi().then(function(response){
                if(response) {
                    $scope.data = response;
                    console.log($scope.data)
                }
            }, function(err){
                console.log(err)
            })
			  //post data
				$scope.data = [];
				apiService.postDataFromApi().then(function(response){
					if(response) {
						$scope.data = response;
					console.log(response)	
					}
				}, function(err){
					console.log(err)
				})
				//delete data
				$scope.data = [];
				apiService.postDataFromApi().then(function(response){
					if(response) {
						$scope.data = response;
					console.log(response)	
					}
				}, function(err){
					console.log(err)
				})
				 // show data	
               $scope.showData= function(item){
				$scope.dataToShow  =item;
			}
			   //add data
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

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicLoading', '$ionicPopover', '$ionicModal','$ionicHistory','$location','hexafy','counts', 'apiService']
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})(); 
	   

