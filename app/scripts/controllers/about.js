'use strict';

/**
 * @ngdoc function
 * @name gifwhackingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gifwhackingApp
 */
angular.module('gifwhackingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
