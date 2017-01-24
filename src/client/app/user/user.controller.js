/**
 * @ngdoc controller
 *
 * @name User
 *
 * @description
 * Controller for 
 */
(function () {
'use strict';
  angular
    .module('app.user')
    .controller('UserController', User);

  function User() {
    var vm = this;

    vm.foo = [];
  }

})();

