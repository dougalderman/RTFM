var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, userService) {
    $scope.login = function(email, pw) {
        userService.login(email, pw);
    }

});