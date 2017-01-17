"use strict";

(function () {
    /**
     * Global controller
     */
    angular.module("app")
        .controller("loginController",
        ["$state", "$window", LoginCtrl]);

    function LoginCtrl($state, $window) {
        var vm = this;

        vm.hasValidationError = false;
        vm.hasAuthenticationError = false;

        vm.errorText = {
            invalidCredentials: $$errorText.INVALID_CREDENTIALS,
            emptyCredentials: $$errorText.EMPTY_CRENDTIALS
        };

        vm.login = function () {
            vm.hasValidationError = false;
            vm.hasAuthenticationError = false;
            vm.credentials = {username: vm.username, password: vm.password};
            $state.go("home.dashboard");
        };
    }
}());
