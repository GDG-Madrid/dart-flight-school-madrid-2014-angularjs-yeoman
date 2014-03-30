'use strict';

angular.module('rneApp')
    .controller('AudiosCtrl', function ($scope,
                                        $routeParams,
                                        CadenasService,
                                        ProgramasService,
                                        AudiosService) {

        CadenasService.get(
            {cacenaId: $routeParams.cadenaId},
            function (data) {
                $scope.cadenaDetail = data.page.items[0];
            }
        );

        ProgramasService.get(
            {programaId: $routeParams.programaId},
            function (data) {
                $scope.programaDetail = data.page.items[0];
            }
        );

        $scope.audios = AudiosService.query(
            {programaId: $routeParams.programaId,
                size: 12,
                page: 1}, function () {

                // Pagination
                $scope.pages = [];

                for (var i = 0; i < $scope.audios.page.totalPages; i++) {
                    $scope.pages[i] = i + 1;
                }

            });



        $scope.loadAudioPage = function (_page) {
            $scope.audios = AudiosService.query(
                {programaId: $routeParams.programaId,
                    size: 12,
                    page: _page});
        }
    });
