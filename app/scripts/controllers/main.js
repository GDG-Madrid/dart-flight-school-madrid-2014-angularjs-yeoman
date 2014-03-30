'use strict';

angular.module('rneApp')
    .controller('MainCtrl', function ($scope, CadenasService) {

        $scope.title = "Cadenas RNE";

        $scope.cadenas = CadenasService.query();

    });
