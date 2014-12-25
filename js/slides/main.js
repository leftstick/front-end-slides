/**
 *
 *  The entrance of slides.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 **/
(function(define) {
    'use strict';

    define([
        './backcover/main',
        './compatibility/main',
        './cover/main',
        './development/main',
        './learn/main',
        './notcss/main',
        './notjs/main',
        './overview/main',
        './requirement/main',
        './ux/main',
        './why/main'
    ], function(backcover, compatibility, cover, development, learn, notcss, notjs, overview, requirement, ux, why) {
        var values = [];
        values.push(backcover);
        values.push(compatibility);
        values.push(cover);
        values.push(development);
        values.push(learn);
        values.push(notcss);
        values.push(notjs);
        values.push(overview);
        values.push(requirement);
        values.push(ux);
        values.push(why);
        return values;
    });

}(define));
