/**
 *  Defines the LearnController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the LearnController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var LearnController = function ($scope) {

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', LearnController];

    });


})(define);