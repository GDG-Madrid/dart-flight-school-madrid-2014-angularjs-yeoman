'use strict';

describe('Service: AudiosService', function () {

  // load the service's module
  beforeEach(module('rneApp'));

  // instantiate service
  var AudiosService;
  beforeEach(inject(function (_AudiosService_) {
    AudiosService = _AudiosService_;
  }));

  it('should do something', function () {
    expect(!!AudiosService).toBe(true);
  });

});
