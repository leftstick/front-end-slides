/**
 *
 *  Defines keyboard service
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 */
(function (define, global) {
    'use strict';

    define(['angular', 'keymaster'], function (angular, key) {

        var modulename = 'KeyBoard';

        var module = angular.module(modulename, []);

        var overrides = {
            prev: {},
            next: {}
        };

        module.run([
            '$rootScope',
            'Routes',
            '$location',
            function ($rootScope, Routes, $location) {

                var findCurIndex = function () {
                    return _.findIndex(Routes, {
                        when: $location.path()
                    });
                };

                var changePath = function (path) {
                    $rootScope.$apply(function () {
                        $location.path(path);
                    });
                };

                key('up, left', function (e, handler) {
                    var when = $location.path();
                    var index = findCurIndex();
                    if (index < 1) {
                        return false;
                    }
                    var prevIndex = index - 1;

                    if (overrides.prev[when]) {
                        overrides.prev[when]();
                        return false;
                    }
                    changePath(Routes[prevIndex].when);
                });

                key('down, right', function (e, handler) {
                    var when = $location.path();
                    var index = findCurIndex();
                    if (index >= Routes.length - 1) {
                        return false;
                    }
                    var nextIndex = index + 1;

                    if (overrides.next[when]) {
                        overrides.next[when]();
                        return false;
                    }
                    changePath(Routes[nextIndex].when);
                });

                key('home', function (e, handler) {
                    var index = findCurIndex();
                    if (index < 1) {
                        return false;
                    }
                    changePath(Routes[1].when);
                });

                key('end', function (e, handler) {
                    var index = findCurIndex();
                    if (index > Routes.length) {
                        return false;
                    }
                    changePath(Routes[Routes.length - 1].when);
                });

            }
        ]);

        return {
            name: modulename
        };

    });

}(define, window));