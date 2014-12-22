/**
 *
 *  The entrance of common.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 21th, 2014
 *
 **/
(function (define) {
    'use strict';

    define([
        './keyboard/main',
        './ui/main'
    ], function (keyboard, ui) {
        var values = keyboard.concat(ui);
        return values;
    });

}(define));