'use strict';

angular.module('rneApp')
    .service('AudiosService', function AudiosService($resource) {
        return $resource('/api/audios/:audioId.json', {}, {
            query: {method: 'GET',
                url: '/api/programas/:programaId/audios.json',
                params:{size: 20, page: 1, offset: 0}},
            get: {method: 'GET'}
        });
    });
