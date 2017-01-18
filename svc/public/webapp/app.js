"use strict";
// (function () {

    var app = angular.module("app", ["ui.router"]).run(
        function ($window, $rootScope, $log, $location) {
            $log.debug("App Instantiated");
        });
// }());
