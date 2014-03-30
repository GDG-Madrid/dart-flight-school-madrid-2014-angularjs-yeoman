'use strict';

describe('Controller: ProgramasCtrl', function () {

  // load the controller's module
  beforeEach(module('rneApp'));

  var ProgramasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgramasCtrl = $controller('ProgramasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
