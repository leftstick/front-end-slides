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
        './controller/CoverController',
        './Routes'
    ], function (
        angular,
        CoverController,
        Routes) {

        var moduleName = 'cover';

        var module = angular.module(moduleName, []);

        module.controller('CoverController', CoverController);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));