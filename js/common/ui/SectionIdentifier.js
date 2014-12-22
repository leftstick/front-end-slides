/**
 *
 *  Defines SectionIdentifier
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define, global) {
    'use strict';

    define(['angular', 'lodash'], function (angular, _) {

        var modulename = 'SectionIdentifier';

        var module = angular.module(modulename, []);

        var definition = function (Routes, $rootScope, $location) {
            return {
                restrict: 'A',
                link: function ($scope, element, attrs) {
                    var routeClass = _.map(Routes, function (route) {
                        return route.when.substring(1);
                    }).join(' ');


                    $rootScope.$on('$routeChangeSuccess', function (e) {
                        var $ngView = element.find('div[ng-view]');
                        $ngView.removeClass(routeClass);
                        $ngView.addClass($location.path().substring(1));
                    });
                }
            };
        };

        module.directive('sectionIdentifier', ['Routes', '$rootScope', '$location', definition]);

        return {
            name: modulename
        };

    });

}(define, window));