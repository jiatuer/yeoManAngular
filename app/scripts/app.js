'use strict';

/**
 * @ngdoc overview
 * @name yAnApp
 * @description
 * # yAnApp
 *
 * Main module of the application.
 */
angular
  .module('yAnApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'ui.sortable',
       'LocalStorageModule'
  ]).config(['localStorageServiceProvider', function(localStorageServiceProvider){

        localStorageServiceProvider.setPrefix('ls');

    }]).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
           .otherwise({
                redirectTo: '/'
            });

    });
