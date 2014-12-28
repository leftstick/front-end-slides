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
        'angular-touch',
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
            name: 'ngTouch'
        }, {
            name: 'ngAnimate'
        }, {
            name: 'ngProgress'
        }];
    });

}(define));