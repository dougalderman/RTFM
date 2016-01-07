var app = angular.module('rtfmApp', ['ui.router', 'firebase']);

app.constant('fb', {'url': 'https://rtfm42.firebaseio.com/'});

app.config(function ($stateProvider, $urlRouterProvider) {

   
    // routing configuration code

    $urlRouterProvider
      .otherwise('/threads');

      $stateProvider
  	    .state('Threads', {
  			    templateUrl: 'views/threads.html',
  			    url: '/threads',
                controller: 'threadsCtrl',
                resolve: {
                    threadsRef: function(threadService) {
                        return threadService.getThreads();
                    }
                }
        })
        .state('OneThread', {
            templateUrl: 'views/oneThread.html',
            url: '/threads/:threadId',
            controller: 'oneThreadCtrl', 
            resolve: {
                threadRef: function(threadService, $stateParams) {
                    return threadService.getThread($stateParams.threadId);
                },
                commentsRef: function(threadService, $stateParams) {
                    return threadService.getComments($stateParams.threadId);
                }
            }
        });

});