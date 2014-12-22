/**
 * ******************************************************************************************************
 *
 *  Defines the cover
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
        './controller/LearnController',
        './Routes'
    ], function (
        angular,
        LearnController,
        Routes) {

        var moduleName = 'learn';

        var module = angular.module(moduleName, []);

        module.controller('LearnController', LearnController);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));