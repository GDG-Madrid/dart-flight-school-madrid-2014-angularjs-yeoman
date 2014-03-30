'use strict';

angular.module('rneApp')
    .controller('ProgramasCtrl', function ($scope, 
										   $routeParams, 
										   ProgramasService, 
										   CadenasService) {

        CadenasService.get(
            {cadenaId: $routeParams.cadenaId},
            function (data) {
                $scope.cadenaDetail = data.page.items[0];
            }
        );

        $scope.programas = ProgramasService.query(
            {cadenaId: $routeParams.cadenaId,
                size: 8}, function() {

                // Pagination
                $scope.pages = [];

                for (var i = 0; i < $scope.programas.page.totalPages; i++) {
                    $scope.pages[i] = i + 1;
                }
            });

        $scope.loadProgramPage = function (_page) {
            $scope.programas = ProgramasService.query(
                {cadenaId: $routeParams.cadenaId,
                    size: 8,
                    page: _page});
        }


    });
