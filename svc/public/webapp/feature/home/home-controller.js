"use strict";

(function () {
    angular.module("app")
        .controller("homeController",
        ["$state", '$window', HomeCtrl]);

    function HomeCtrl($state, $window) {
        var vm = this;
        
        vm.isAtDashboard = function () {
            return $state.is("home.dashboard");
        };

        vm.navigateToDashboard = function () {
            $state.go("home.dashboard");
        };

        vm.logout = function () {
            delete $window.sessionStorage.token;
            $state.go("login");
        };
    }
}());