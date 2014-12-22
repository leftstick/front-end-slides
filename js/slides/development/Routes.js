/**
 *
 *  Routes module expose route information used in Development feature
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
            when: '/development',
            controller: 'DevelopmentController',
            templateUrl: slides + '/development/partials/Development.html',
            position: 5
        }];
    });

}(define, require));