'use strict';

describe('Directive: rneAudios', function () {

  // load the directive's module
  beforeEach(module('rneApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rne-audios></rne-audios>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rneAudios directive');
  }));
});
