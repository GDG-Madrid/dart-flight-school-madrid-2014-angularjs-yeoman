'use strict';

describe('Service: ProgramasService', function () {

  // load the service's module
  beforeEach(module('rneApp'));

  // instantiate service
  var ProgramasService;
  beforeEach(inject(function (_ProgramasService_) {
    ProgramasService = _ProgramasService_;
  }));

  it('should do something', function () {
    expect(!!ProgramasService).toBe(true);
  });

});
