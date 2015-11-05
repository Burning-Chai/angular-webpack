module.exports = function($scope, $http) {

  $http.get("/api/users")
    .success(function(data) {
      $scope.users = data;
    })
    .error(function() {
      console.log("エラー");
    })

};
