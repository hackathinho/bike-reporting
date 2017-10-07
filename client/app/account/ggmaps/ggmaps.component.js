'use strict';
const angular = require('angular');

export class ggmapsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}


export default angular.module('bikeReportingApp.ggmaps', [])
  .component('ggmaps', {
    template: require('./index.html'),
    bindings: { message: '<' },
    controller: ggmapsComponent
  })
  .name;
