/**
 *
 *  Routes module expose route information used in cover feature
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
            when: '/backcover',
            controller: 'BackcoverController',
            templateUrl: slides + '/backcover/partials/Backcover.html',
            position: 10
        }];
    });

}(define, require));