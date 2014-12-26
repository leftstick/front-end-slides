/**
 *
 *  Defines SlideAnimation
 *
 *  @author  Howard.Zuo
 *  @date    Dec 26th, 2014
 *
 */
(function(define, global) {
    'use strict';

    define(['angular', 'keymaster'], function(angular, key) {

        var modulename = 'SlideAnimation';

        var module = angular.module(modulename, []);

        var $body = $('body');

        key('up, left, home, down, right, end, space', function(e, handler) {
            switch (handler.key) {
                case 'up':
                case 'left':
                case 'home':
                    $body.removeClass('afterward').addClass('forward');
                    break;
                case 'down':
                case 'right':
                case 'space':
                case 'end':
                    $body.removeClass('forward').addClass('afterward');
                    break;
            }
        });
        return {
            name: modulename
        };

    });

}(define, window));
