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
        './controller/RequirementController',
        './Routes'
    ], function (
        angular,
        RequirementController,
        Routes) {

        var moduleName = 'requirement';

        var module = angular.module(moduleName, []);

        module.controller('RequirementController', RequirementController);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));