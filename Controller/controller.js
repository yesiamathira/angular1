var app = angular.module('angular1', []);
app.controller('myCtrl', function($scope){
    $scope.name="Hello Athira";
    console.log($scope.name);
});


