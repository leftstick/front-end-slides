/**
 *
 *  The entrance of ext.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 **/
(function (define) {
    'use strict';

    define([
        'jquery',
        'keymaster',
        'hammer',
        'angular',
        'angular-route',
        'mobileDetect',
        'ngprogress',
        'angular-animate',
        'css!ngprogress-css',
        'css!amazeui-css',
        'css!main-css'
    ], function () {

        return [{
            name: 'ngRoute'
        }, {
            name: 'ngAnimate'
        }, {
            name: 'ngProgress'
        }];
    });

}(define));