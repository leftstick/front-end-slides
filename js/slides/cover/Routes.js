/**
 *
 *  Routes module expose route information used in cover feature
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 */
(function (define, require) {
    'use strict';

    var slides = require.toUrl('slides');

    define([], function () {
        return [{
            when: '/cover',
            controller: 'CoverController',
            templateUrl: slides + '/cover/partials/Cover.html',
            position: 1
        }];
    });

}(define, require));