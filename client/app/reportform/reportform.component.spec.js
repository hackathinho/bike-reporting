'use strict';

describe('Component: reportform', function() {
  // load the component's module
  beforeEach(module('bikeReportingApp.reportform'));

  var reportformComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    reportformComponent = $componentController('reportform', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
