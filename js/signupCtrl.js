var app = angular.module('rtfmApp');

app.controller('signupCtrl', function($scope, userService) {
    
    $scope.register = function(newEmail, newPassword) {
        userService.register(newEmail, newPassword);
    }

});