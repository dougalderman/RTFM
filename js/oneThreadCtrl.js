var app = angular.module('rtfmApp');

app.controller('oneThreadCtrl', function($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject) {
    
    var thread = $firebaseObject(threadRef);
    thread.$bindTo($scope, 'thread');
    
    $scope.comments = $firebaseArray(commentsRef);
    
    $scope.createComment = function(userName, text) {
        $scope.comments.$add({
            username: userName,
            text: text
        });
        $scope.newCommentText = '';
        $scope.username = '';
    };
   
  
});