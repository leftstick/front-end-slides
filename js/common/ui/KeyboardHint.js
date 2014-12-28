/**
 *
 *  Defines KeyboardHint
 *
 *  @author  Howard.Zuo
 *  @date    Dec 28th, 2014
 *
 */
(function (define, doc) {
    'use strict';

    var common = require.toUrl('common');

    define(['angular', 'jquery', 'hammer'], function (angular, $, Hammer) {

        $('body div[ng-view]').after('<ng-hint></ng-hint>');

        var modulename = 'KeyboardHint';

        var module = angular.module(modulename, []);

        var definition = function (switcher, $rootScope) {
            return {
                restrict: 'E',
                link: function ($scope) {

                    var swipe;

                    var $body = $(doc.body);

                    $scope.hintInfo = {
                        canPrev: false,
                        canNext: false,
                        isMobile: $.browser.mobile
                    };

                    var stopEvent = function (e) {
                        if (!e) {
                            return;
                        }
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    };


                    var evalHint = function () {
                        $scope.hintInfo.canPrev = switcher.canPrev();
                        $scope.hintInfo.canNext = switcher.canNext();
                    };

                    $scope.prev = function (e) {
                        $body.removeClass('afterward').addClass('forward');
                        switcher.prev();
                        stopEvent(e);
                    };

                    $scope.next = function (e) {
                        $body.removeClass('forward').addClass('afterward');
                        switcher.next();
                        stopEvent(e);
                    };

                    evalHint();

                    if ($scope.hintInfo.isMobile) {
                        swipe = new Hammer($body[0]);
                        swipe.get('swipe').set({
                            direction: Hammer.DIRECTION_VERTICAL
                        });
                        swipe.on('swipedown', function () {
                            if (switcher.canPrev()) {
                                $body.removeClass('afterward').addClass('forward');
                                $rootScope.$apply(function () {
                                    switcher.prev();
                                });
                            }
                        });
                        swipe.on('swipeup', function () {
                            if (switcher.canNext()) {
                                $body.removeClass('forward').addClass('afterward');
                                $rootScope.$apply(function () {
                                    switcher.next();
                                });
                            }
                        });
                    }

                    $rootScope.$on('$routeChangeSuccess', function () {
                        evalHint();
                    });

                    $scope.$on('$destroy', function () {
                        if (swipe) {
                            swipe.destroy();
                        }
                    });
                },
                templateUrl: common + '/ui/ngHint.html'
            };
        };

        module.directive('ngHint', ['switcher', '$rootScope', definition]);

        return {
            name: modulename
        };

    });

}(define, document));