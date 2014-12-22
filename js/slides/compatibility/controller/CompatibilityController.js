/**
 *  Defines the CompatibilityController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the CompatibilityController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var CompatibilityController = function ($scope) {

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', CompatibilityController];

    });


})(define);