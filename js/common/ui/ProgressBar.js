/**
 *
 *  Defines ProgressBar
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 */
(function (define, global) {
    'use strict';

    define(['angular', 'lodash'], function (angular, _) {

        var modulename = 'ProgressBar';

        var module = angular.module(modulename, []);

        var definition = function (Routes, $rootScope, $location, ngProgress) {
            return {
                restrict: 'A',
                scope: {},
                link: function ($scope, element, attrs) {

                    var findCurIndex = function () {
                        return _.findIndex(Routes, {
                            when: $location.path()
                        });
                    };

                    var total = Routes.length;
                    ngProgress.color('#0e90d2');
                    ngProgress.set(0);

                    $rootScope.$on('$routeChangeSuccess', function (e) {
                        var position = findCurIndex() + 1;
                        var percent = position / total;
                        ngProgress.set(percent * 100);
                    });
                }
            };
        };

        module.directive('progressBar', ['Routes', '$rootScope', '$location', 'ngProgress', definition]);

        return {
            name: modulename
        };

    });

}(define, window));