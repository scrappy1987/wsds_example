"use strict";
// (function () {

    var app = angular.module("app", ["ui.router"]).run(
        function ($window, $rootScope, $log) {
            $log.debug("App Instantiated");
        });
// }());
