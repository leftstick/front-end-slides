/**
 *  Defines the RequirementController controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the RequirementController class with RequireJS
     */
    define([], function () {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var RequirementController = function ($scope) {

            $scope.$on('$destroy', function () {});
        };

        return ['$scope', RequirementController];

    });


})(define);