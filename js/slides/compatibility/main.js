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
        './Routes'
    ], function (
        angular,
        Routes) {

        var moduleName = 'compatibility';

        var module = angular.module(moduleName, []);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));