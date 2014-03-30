'use strict';

angular.module('rneApp')
    .service('CadenasService', function CadenasService($resource) {
        return $resource('/api/cadenas/:cadenaId.json', {}, {
            query: {method: 'GET',
                url: '/api/medios/851/cadenas.json',
                params:{size: 20, page: 1, offset: 0}},
            get: {method: 'GET'}
        });
    });
