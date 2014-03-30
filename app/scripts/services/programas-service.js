'use strict';

angular.module('rneApp')
    .service('ProgramasService', function ProgramasService($resource) {
        return $resource('/api/programas/:programaId.json', {} , {
            query: {method: 'GET',
                url: '/api/cadenas/:cadenaId/programas.json',
                params:{size: 20, page: 1, offset: 0}},
            get: {method: 'GET'}

        });
    });
