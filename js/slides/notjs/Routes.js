/**
 *
 *  Routes module expose route information used in notjs feature
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
            when: '/notjs',
            templateUrl: slides + '/notjs/partials/Notjs.html',
            position: 8
        }];
    });

}(define, require));