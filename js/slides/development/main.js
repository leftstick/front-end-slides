/**
 * ******************************************************************************************************
 *
 *  Defines the Development
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
        './controller/DevelopmentController',
        './Routes'
    ], function (
        angular,
        DevelopmentController,
        Routes) {

        var moduleName = 'development';

        var module = angular.module(moduleName, []);

        module.controller('DevelopmentController', DevelopmentController);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));