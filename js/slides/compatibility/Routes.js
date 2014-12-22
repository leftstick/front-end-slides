/**
 *
 *  Routes module expose route information used in compatibility feature
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
            when: '/compatibility',
            controller: 'CompatibilityController',
            templateUrl: slides + '/compatibility/partials/Compatibility.html',
            position: 6
        }];
    });

}(define, require));