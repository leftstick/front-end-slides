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
        './controller/OverViewController',
        './directive/ForceDirected',
        './Routes'
    ], function (
        angular,
        OverViewController,
        ForceDirected,
        Routes) {

        var moduleName = 'overview';

        var module = angular.module(moduleName, []);

        module.controller('OverViewController', OverViewController);
        module.directive('forceDirected', ForceDirected);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));