/**
 *
 *  A require module should contain require configurations.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 **/
(function (requirejs) {
    'use strict';

    // Configure loading modules from the js directory
    var baseUrl = '/js/';

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
            'angular': 'bower/angular/angular.min',
            'angular-route': 'bower/angular-route/angular-route.min',
            'angular-animate': 'bower/angular-animate/angular-animate.min',
            'ngprogress': 'bower/ngprogress/build/ngProgress.min',
            'ngprogress-css': 'bower/ngprogress/ngProgress',
            'amazeui-css': 'bower/amazeui/dist/css/amazeui.min',
            'amazeui': 'bower/amazeui/dist/js/amazeui.min',
            'd3': 'bower/d3/d3.min',
            'require-css': 'bower/require-css',
            'tpl': 'bower/requirejs-tpl/tpl',
        },
        shim: {
            'lodash': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
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

    requirejs(['main']);

}(requirejs));