/**
 *
 *  The entrance of slides.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 **/
(function (define) {
    'use strict';

    define([
        './backcover/main',
        './compatibility/main',
        './cover/main',
        './development/main',
        './learn/main',
        './overview/main',
        './requirement/main'
    ], function (backcover, compatibility, cover, development, learn, overview, requirement) {
        var values = [];
        values.push(backcover);
        values.push(compatibility);
        values.push(cover);
        values.push(development);
        values.push(learn);
        values.push(overview);
        values.push(requirement);
        return values;
    });

}(define));