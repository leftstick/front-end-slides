/**
 *
 *  Routes module expose route information used in ux feature
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
            when: '/ux',
            templateUrl: slides + '/ux/partials/Ux.html',
            position: 3
        }];
    });

}(define, require));