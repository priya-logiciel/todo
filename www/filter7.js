angular
  .module("starter.filters", [])
​
  .filter("upper", function () {
    return function (input, propName) {
      return input
    };
  })
  .service('api', ['$http', '$q', function($http, $q) {
​
    this.getdata = function (data) {
      var deferredAbort = $q.defer();
​
      var request = $http({
        method: "get",
        url: 'https://jsonplaceholder.typicode.com/posts',
        timeout: deferredAbort.promise,
      })
​
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
​
      promise.finally(function () {
        promise.abort = angular.noop;
        deferredAbort = request = promise = null;
      });
​
      return promise;
    };
    return {
      getData: this.getdata
    }
  }])