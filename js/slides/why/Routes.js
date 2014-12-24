/**
 *
 *  Routes module expose route information used in why feature
 *
 *  @author  Howard.Zuo
 *  @date    Dec 24th, 2014
 *
 */
(function (define, require) {
    'use strict';

    var slides = require.toUrl('slides');

    define([], function () {
        return [{
            when: '/why',
            templateUrl: slides + '/why/partials/Why.html',
            position: 2
        }];
    });

}(define, require));