/**
 *
 *  Routes module expose route information used in overview feature
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
            when: '/overview',
            controller: 'OverViewController',
            templateUrl: slides + '/overview/partials/Overview.html',
            position: 4
        }];
    });

}(define, require));