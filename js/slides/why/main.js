/**
 * ******************************************************************************************************
 *
 *  Defines the why
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

        var moduleName = 'why';

        var module = angular.module(moduleName, []);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));