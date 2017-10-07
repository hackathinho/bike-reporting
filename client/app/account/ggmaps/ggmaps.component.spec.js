'use strict';

describe('Component: ggmaps', function() {
  // load the component's module
  beforeEach(module('bikeReportingApp.ggmaps'));

  var ggmapsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    ggmapsComponent = $componentController('ggmaps', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
