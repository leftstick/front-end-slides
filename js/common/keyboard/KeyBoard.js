/**
 *
 *  Defines keyboard service
 *
 *  @author  Howard.Zuo
 *  @date    Dec 26th, 2014
 *
 */
(function (define) {
    'use strict';

    define(['angular', 'keymaster', 'jquery'], function (angular, key, $) {

        var modulename = 'KeyBoard';

        var module = angular.module(modulename, []);

        module.run([
            'switcher', '$rootScope',
            function (switcher, $rootScope) {

                key('up, left', function () {
                    if (!switcher.canPrev()) {
                        return;
                    }
                    $rootScope.$apply(function () {
                        switcher.prev();
                    });
                });

                key('down, right, space', function () {
                    if (!switcher.canNext()) {
                        return;
                    }
                    $rootScope.$apply(function () {
                        switcher.next();
                    });
                });

                key('home', function () {
                    if (switcher.isFirst()) {
                        return;
                    }
                    $rootScope.$apply(function () {
                        switcher.first();
                    });
                });

                key('end', function () {
                    if (switcher.isLast()) {
                        return;
                    }
                    $rootScope.$apply(function () {
                        switcher.last();
                    });
                });

                var $body = $('body');
                key('up, left, home, down, right, end, space', function (e, handler) {
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

            }
        ]);

        return {
            name: modulename
        };

    });

}(define));