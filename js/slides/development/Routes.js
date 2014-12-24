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
            templateUrl: slides + '/development/partials/Development.html',
            position: 7
        }];
    });

}(define, require));