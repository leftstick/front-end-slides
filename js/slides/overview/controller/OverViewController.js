/**
 *  Defines the OverViewController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the OverViewController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var OverViewController = function ($scope) {

            $scope.data = [
                'HTML',
                'HTML5',
                'Web Component',
                'Markup',
                'Polymer',
                'Web RTC',
                'Media playback',
                'Canvas',
                'Drag and Drop',
                'Push state',
                'HTML5 Mode',
                'Web Storage',
                'Geolocation',
                'JavaScript',
                'Promise',
                'q',
                'Thunk',
                'async',
                'Underscore',
                'Lodash',
                '',
                'AngularJS',
                'RequireJS',
                'BackboneJS',
                'ReactJS',
                'jQuery',
                'ZeptoJS',
                'Ext.js',
                'YUI',
                'NodeJS',
                'npm',
                'Express',
                'Grunt',
                'Gulp',
                'browserify',
                'bower',
                'pm2',
                'koa',
                'karma',
                'cordova',
                'Coffee Script',
                'forever',
                'yo',
                'Less',
                'Sass',
                'Request',
                'IE',
                'Firefox',
                'Chrome',
                'Opera',
                'Webkit',
                'Mozila',
                'Gecko',
                'Trident',
                'Presto',
                'UX',
                'Persona'
            ];

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', OverViewController];

    });


})(define);