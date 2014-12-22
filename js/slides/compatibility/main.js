/**
 * ******************************************************************************************************
 *
 *  Defines the compatibility
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 * ******************************************************************************************************
 */
(function (define) {
    'use strict';

    define([
        'angular',
        './controller/CompatibilityController',
        './Routes'
    ], function (
        angular,
        CompatibilityController,
        Routes) {

        var moduleName = 'compatibility';

        var module = angular.module(moduleName, []);

        module.controller('CompatibilityController', CompatibilityController);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));