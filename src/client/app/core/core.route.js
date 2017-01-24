(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);
    
  appRun.$inject = ['$rootScope', 'routerHelper'];
  /* @ngInject */
  function appRun($rootScope, routerHelper) {
    $rootScope.resouces = [];
    $rootScope.resouces['Dashboard'] = 'Dash';
    $rootScope.resouces['Admin'] = 'Admin';
    var otherwise = '/404';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.html',
          title: '404'
        }
      }
    ];
  }
})();
