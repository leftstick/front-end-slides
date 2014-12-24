/**
 *
 *  Routes module expose route information used in notcss feature
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
            when: '/notcss',
            templateUrl: slides + '/notcss/partials/Notcss.html',
            position: 9
        }];
    });

}(define, require));