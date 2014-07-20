'use strict';

/**
 * @ngdoc function
 * @name gifwhackingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gifwhackingApp
 */
angular.module('gifwhackingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
