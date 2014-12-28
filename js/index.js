/**
 *
 *  A require module should contain require configurations.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 28th, 2014
 *
 **/
(function (requirejs) {
    'use strict';

    // Configure loading modules from the js directory
    var baseUrl = '/front-end-slides/js/';

    requirejs.config({
        baseUrl: baseUrl,
        paths: {
            'main-css': '../css/main',
            'fw': 'fw',
            'conf': 'fw/conf',
            'ext': 'fw/ext',
            'utils': 'fw/utils',
            'common': 'common',
            'slides': 'slides',
            'lodash': 'bower/lodash/dist/lodash.min',
            'jquery': 'bower/jquery/dist/jquery.min',
            'keymaster': 'bower/keymaster/keymaster',
            'hammer': 'bower/hammerjs/hammer.min',
            'jquery-wechat': 'bower/jquery-wechat/dist/jquery-wechat.min',
            'angular': 'bower/angular/angular.min',
            'angular-route': 'bower/angular-route/angular-route.min',
            'angular-animate': 'bower/angular-animate/angular-animate.min',
            'ngprogress': 'bower/ngprogress/build/ngProgress.min',
            'ngprogress-css': 'bower/ngprogress/ngProgress',
            'amazeui-css': 'bower/amazeui/dist/css/amazeui.min',
            'd3': 'bower/d3/d3.min',
            'require-css': 'bower/require-css',
            'tpl': 'bower/requirejs-tpl/tpl',
            'splash': 'libs/splash',
            'mobileDetect': 'libs/mobileDetect'
        },
        shim: {
            'lodash': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            },
            'jquery-wechat': {
                deps: ['jquery']
            },
            'keymaster': {
                exports: 'key'
            },
            'amazeui': {
                deps: ['jquery']
            },
            'angular': {
                exports: 'angular',
                deps: ['lodash', 'jquery']
            },
            'angular-route': {
                deps: ['angular']
            },
            'angular-animate': {
                deps: ['angular']
            },
            'ngprogress': {
                deps: ['angular']
            }
        },
        map: {
            '*': {
                'css': 'require-css/css.min'
            }
        }
    });

    require(['jquery', 'jquery-wechat'], function ($) {
        $.wechat.enable();
    });

    require(['splash', 'css!splash'], function (splash) {
        splash.enable('tailing');
    });

    requirejs(['main']);

}(requirejs));