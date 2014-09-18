'use strict';

/**
 * @ngdoc function
 * @name yAnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yAnApp
 */
angular.module('yAnApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    $scope.todos = ['Item1','Item2','Item3'];
        $scope.tod = "item";
    $scope.addTodo = function () {
        console.log( $scope.tod);
        $scope.todos.push($scope.tod);
        console.log($scope.tod);
        $scope.tod = '';
     };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

  });
