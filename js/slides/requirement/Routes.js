/**
 *
 *  Routes module expose route information used in requirement feature
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
            when: '/requirement',
            templateUrl: slides + '/requirement/partials/Requirement.html',
            position: 4
        }];
    });

}(define, require));