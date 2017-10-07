'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('reportform', {
    url: '/reportform',
    template: '<reportform></reportform>'
  });
}
