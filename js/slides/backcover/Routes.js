/**
 *
 *  Routes module expose route information used in backcover feature
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
            when: '/backcover',
            templateUrl: slides + '/backcover/partials/Backcover.html',
            position: 11
        }];
    });

}(define, require));