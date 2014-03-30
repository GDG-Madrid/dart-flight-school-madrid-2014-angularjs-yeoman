'use strict';

describe('Controller: AudiosCtrl', function () {

  // load the controller's module
  beforeEach(module('rneApp'));

  var AudiosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AudiosCtrl = $controller('AudiosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
