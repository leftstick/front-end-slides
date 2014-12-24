/**
 * ******************************************************************************************************
 *
 *  Defines the requirement
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
        RequirementController,
        Routes) {

        var moduleName = 'requirement';

        var module = angular.module(moduleName, []);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));