/**
 * ******************************************************************************************************
 *
 *  Defines the cover
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 * ******************************************************************************************************
 */
(function (define) {
    'use strict';

    define([
        'angular',
        './controller/BackcoverController',
        './Routes'
    ], function (
        angular,
        BackcoverController,
        Routes) {

        var moduleName = 'backcover';

        var module = angular.module(moduleName, []);

        module.controller('BackcoverController', BackcoverController);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));