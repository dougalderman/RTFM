var app = angular.module('rtfmApp');

app.service('userService', function(fb, $firebaseAuth, $state) {
    
    var authRef = $firebaseAuth(new Firebase(fb.url));
        
    this.getUser = function() {
        return authRef.$getAuth();
    }
    
    this.register = function(email, password) {
        authRef.$createUser({email: email, password: password})
        .then(function(newUser){
            console.log('New User Created: ', newUser);
            $state.go('Login')
        })
        .catch(function(err){
            console.error('Register Error', err);
        });
    };
    
    this.login = function(email, password) {
        authRef.$authWithPassword({email: email, password: password})
        .then(function(authData) {
            console.log('Login Success');
            $state.go('Threads');
        })
        .catch(function(err) {
            console.error('Login Error: ', err);
            alert('No record of user on server. Please sign up.');
            $state.go('Signup');
        });
    };
    
    this.logout = function(user) {
        return authRef.$unauth();
    };
    
    authRef.$onAuth(function(authData) {
        if (!authData) {
            $state.go('Login');
        }
    });
                 
});