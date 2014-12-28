/**
 *
 *  The entrance of common.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 28th, 2014
 *
 **/
(function (define) {
    'use strict';

    define([
        './keyboard/main',
        './service/main',
        './ui/main'
    ], function (keyboard, service, ui) {
        var values = keyboard
            .concat(service).concat(ui);
        return values;
    });

}(define));