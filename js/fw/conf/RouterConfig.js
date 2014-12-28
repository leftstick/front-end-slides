/**
 *  The RouterConfig collect the route information from each feature and give a
 *  complete configuration of the application.
 *
 *  Note: this module is part of application-level framework, developers should
 *        never care about
 *
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 */
(function (define) {
    'use strict';

    define(['lodash'], function (_) {

        var config = function (slides, app) {
            if (!slides || slides.length === 0) {
                console.warn('No slides loaded');
                return;
            }

            //config router
            app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

                var routes = [];

                //retrieve router from each slide
                _.each(slides, function (slide) {
                    if (!slide.routes) {
                        return;
                    }
                    _.each(slide.routes, function (route) {
                        routes.push(route);
                    });
                });

                //config each router
                _.each(routes, function (route) {
                    $routeProvider
                        .when(route.when, {
                            templateUrl: route.templateUrl,
                            controller: route.controller
                        });
                });

                //config first page
                var first = _.find(routes, {
                    position: 1
                });
                if (first) {
                    $routeProvider.otherwise({
                        redirectTo: first.when
                    });
                }

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: true
                });
            }]);

            var routes = _.chain(slides)
                .pluck('routes')
                .where(Boolean)
                .flatten()
                .value();

            routes = _.sortBy(routes, 'position');

            app.constant('Routes', routes);

        };

        return {
            type: 'config',
            func: config
        };

    });

}(define));