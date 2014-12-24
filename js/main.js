/**
 *  The bootstrap of the whole slides application
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 */
(function(define) {
    'use strict';

    //specify each feature module here explicitly
    define([
        'angular',
        'splash',
        'lodash',
        'conf/main',
        'ext/main',
        'common/main',
        'slides/main'
    ], function(angular, splash, _, conf, ext, common, slides) {

        var appName = 'angular-slides';

        var modules = ext.concat(common).concat(slides);

        /**
         * Start the main application
         * We manually start this process; since ng:app is gone
         */
        var app = angular.module(appName, _.pluck(modules, 'name'));

        for (var i = 0; i < conf.length; i++) {
            var config = conf[i];
            config.func(slides, app);
        }

        splash.destroy();

        angular.bootstrap(document, [appName]);

        return app;
    });


}(define));
