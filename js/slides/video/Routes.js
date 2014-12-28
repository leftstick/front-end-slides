/**
 *
 *  Routes module expose route information used in video feature
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
            when: '/video',
            templateUrl: slides + '/video/partials/Video.html',
            position: 11
        }];
    });

}(define, require));