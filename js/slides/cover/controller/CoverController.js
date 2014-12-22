/**
 *  Defines the CoverController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the CoverController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var CoverController = function ($scope) {

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', CoverController];

    });


})(define);