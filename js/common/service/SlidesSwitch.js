/**
 *
 *  Defines SlidesSwitch
 *
 *  @author  Howard.Zuo
 *  @date    Dec 28th, 2014
 *
 */
(function (define) {
    'use strict';

    define(['angular', 'lodash'], function (angular, _) {

        var modulename = 'SlidesSwitch';

        var module = angular.module(modulename, []);

        module.service('switcher', ['$rootScope', '$location', 'Routes', function ($rootScope, $location, Routes) {

            var findCurIndex = function () {
                return _.findIndex(Routes, {
                    when: $location.path()
                });
            };

            var changePath = function (path) {
                $location.path(path);
            };

            this.isFirst = function () {
                var curIndex = findCurIndex();
                return curIndex === 0;
            };

            this.canPrev = function () {
                var curIndex = findCurIndex();
                return curIndex > 0;
            };

            this.canNext = function () {
                var curIndex = findCurIndex();
                return curIndex < (Routes.length - 1);
            };

            this.isLast = function () {
                var curIndex = findCurIndex();
                return curIndex === (Routes.length - 1);
            };

            this.first = function () {
                if (this.isFirst()) {
                    return;
                }
                changePath(Routes[0].when);
            };

            this.prev = function () {
                if (!this.canPrev()) {
                    return;
                }
                var prevIndex = findCurIndex() - 1;
                changePath(Routes[prevIndex].when);
            };

            this.next = function () {
                if (!this.canNext()) {
                    return;
                }
                var nextIndex = findCurIndex() + 1;
                changePath(Routes[nextIndex].when);
            };

            this.last = function () {
                if (this.isLast()) {
                    return;
                }
                changePath(Routes[Routes.length - 1].when);
            };



        }]);

        return {
            name: modulename
        };

    });

}(define));