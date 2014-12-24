/**
 * ******************************************************************************************************
 *
 *  Defines the Development
 *
 *  @author  Howard.Zuo
 *  @date    Dec 24th, 2014
 *
 * ******************************************************************************************************
 */
(function (define) {
    'use strict';

    define([
        'angular',
        './Routes'
    ], function (
        angular,
        Routes) {

        var moduleName = 'development';

        var module = angular.module(moduleName, []);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));