'use strict';

angular.module('rneApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/programas/:cadenaId', {
        templateUrl: 'views/programas.html',
        controller: 'ProgramasCtrl'
      })
      .when('/audios/:cadenaId/:programaId', {
        templateUrl: 'views/audios.html',
        controller: 'AudiosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
