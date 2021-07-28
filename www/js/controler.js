(function(){
	'use strict';	
		var DemoCtrl = function($scope,hexafy,apiService)  {
			
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
					{  
						firstname: 'nikhil',
						lastname: 'singh',
							age: '25',
						gender:'male'
					},
					{
						firstname: 'varsha',
						lastname: 'pandy',
						age: '22',
						gender: 'female'
				    },
					{  
						firstname: 'prince',
						lastname: 'yadav',
						age: '24',
						gender:'male'
					},
					{
						firstname: 'priyanka',
						lastname: 'yadav',
						age: '23',
						gender: 'female'
					},
				]
				$scope.dataToshow={
					firstname:'nikhil',
					lastname:'singh',
					age:'25',
					gender:'male'
				};
				$scope.showdata = function(item) {
					$scope.dataToShow.firstname
					$scope.dataToShow.lastname
					$scope.dataToShow.age
					$scope.dataToShow.gender			
			 }
			 $scope.customerlist.pop();
			 $scope.customerlist.forEach(function(item){
				 console.log(item)
			})
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
			},  function(err){
               	 console.log(err)
            })
			// post data
			$scope.postData2FromApi = function(title,body,id){
			 apiService.postDataFromApi(title,body,id).then(function(response){
				  $scope.data.push(response)
				})	
			}
			  //  Delete data
			$scope.deletedata = function (item,$index){
				apiService.deleteDataFromApi(item).then(function(response){
					$scope.data.splice($index)
				})
			}	
			  //  edit data
			$scope.editedata = function (item,$index){
				apiService.editDataFromApi(item).then(function(response){
					$scope.data.replacewith($index)
				})
			}		 	 
             
			//broadcast the event down
			$scope.OnClick = function (evt) {
			}
			//handle SendDown event
			$scope.$on("SendDown", function (evt, data) {
				$scope.Message = "Inside SendDown handler of MyController1 : " + data;
			});
			 //handle SendUp event
			 $scope.$on("SendUp", function (evt,data) {
				$scope.Message = "Inside SendUp handler of MyController1 : " + data;
			});
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
			DemoCtrl.$inject = ['$scope', 'hexafy', 'apiService']
			angular
				.module('starter')
				.controller('MainCtrl',DemoCtrl);
})(); 
	   

