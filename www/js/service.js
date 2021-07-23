angular
  .module('starter')
.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString();
    }
})
.service('counts', function() {
        this.myFunc = function (x) {
            return x.toString();
        }
    })
    //get  data
.service('apiService',function($http, $q){
	this.getDataFromApi = function (x){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "get",
			url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
		})
		var promise = request.then(
		function (response) {
				return response.data;
		},
		function () {
			return $q.reject("Something went wrong");
		}
		);
		promise.abort = function () {
			deferredAbort.resolve();
		};
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
    //post data
	this.postDataFromApi = function (title,body,id){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "post",
			title: title,
			body: body,
			id: 1,
			url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
		}) 
		var promise = request.then(
		function (response) {
				return response.data;
		},
		function () {
			return $q.reject("Something went wrong");
		}
		);
		promise.abort = function () {
			deferredAbort.resolve();
		};
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
	   //deiete data
		this.deleteDataFromApi = function (x){
	    var deferredAbort = $q.defer();
		var request = $http({
			url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
			method: "delete",
		}) 
		var promise = request.then(
		function (response) {
				return response.data;
		},
		function () {
			return $q.reject("Something went wrong");
		}
		);
		promise.abort = function () {
			deferredAbort.resolve();
		};
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}
})

