/**
 *  Defines the DevelopmentController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the DevelopmentController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var DevelopmentController = function ($scope) {

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', DevelopmentController];

    });


})(define);