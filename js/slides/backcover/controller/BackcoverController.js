/**
 *  Defines the BackcoverController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the BackcoverController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var BackcoverController = function ($scope) {

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', BackcoverController];

    });


})(define);