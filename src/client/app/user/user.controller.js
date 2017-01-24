(function () {
    'use strict';
    angular
        .module('app.user')
        .controller('UserController', User);
    
    User.$inject = ['$scope'];
    function User($scope) {
        var vm = this;

        vm.dropTargetText = "Drag the small circle here.";

        $scope.draggableHint = function () {
            return $(".draggable").clone();
        }

        $scope.onDragEnd = function () {
            var draggable = $(".draggable");

            if (!draggable.data("kendoDraggable").dropped) {
                // drag ended outside of any droptarget
                vm.dropTargetText = "Try again!";
            }

            draggable.removeClass("hollow");
        }

        $scope.onDragStart = function () {
            $scope.$apply(function () {
                vm.draggableClass = "hollow";
                vm.dropTargetText = "Drop here.";
            });
        }

        $scope.onDragEnter = function (e) {
            $scope.$apply(function () {
                vm.dropTargetText = "Now drop...";
            });
        }

        $scope.onDragLeave = function (e) {
            $scope.$apply(function () {
                vm.dropTargetText = "Drop here.";
            });
        }

        $scope.onDrop = function (e) {
            $scope.$apply(function () {
                vm.dropTargetText = "You did great!";
                vm.draggableClass = "";
            });
        }

        $scope.foo = [];
    }

})();