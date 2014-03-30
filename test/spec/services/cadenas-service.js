'use strict';

describe('Service: CadenasService', function () {

  // load the service's module
  beforeEach(module('rneApp'));

  // instantiate service
  var Cadenasservice;
  beforeEach(inject(function (_CadenasService_) {
    CadenasService = _CadenasService_;
  }));

  it('should do something', function () {
    expect(!!CadenasService).toBe(true);
  });

});
