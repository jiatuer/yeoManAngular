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
    $scope.todo={};
    $scope.todo.todos = ['Item1','Item2','Item3'];
    $scope.todo.todo = '';
    $scope.addTodo = function () {
        $scope.todo.todos.push($scope.todo.todo);
        $scope.todo.todo = '';
     };

        $scope.removeTodo = function (index) {
            $scope.todo.todos.splice(index, 1);
        };

  });
