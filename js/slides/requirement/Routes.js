/**
 *
 *  Routes module expose route information used in cover feature
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define, require) {
    'use strict';

    var slides = require.toUrl('slides');

    define([], function () {
        return [{
            when: '/requirement',
            controller: 'RequirementController',
            templateUrl: slides + '/requirement/partials/Requirement.html',
            position: 2
        }];
    });

}(define, require));