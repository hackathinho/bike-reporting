'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const routing = require('./reportform.routes');
import ReportformController from './reportform.controller';
import ngMaterial from 'angular-material';

export default angular.module('bikeReportingApp.reportform', [uiRouter, ngMaterial])
  .component('reportform', {
    template: require('./reportform.html')
  })
  .controller('ReportformController', ReportformController)
  .name;
