(function(win, doc, Reveal, UX, LANGUAGE, TECH) {
    'use strict';

    var triggerEvent = function(name) {

        setTimeout(function() {
            var event;

            if (doc.createEvent) {
                event = doc.createEvent('HTMLEvents');
                event.initEvent(name, true, true);
            } else {
                event = doc.createEventObject();
                event.eventType = name;
            }
            if (doc.createEvent) {
                doc.dispatchEvent(event);
            } else {
                doc.fireEvent('on' + event.eventType, event);
            }
        }, 200);

    };

    var chartOper = {
        '8': function() {
            setTimeout(function() {
                UX.draw(1096, 570);
                triggerEvent('resize');
            }, 600);
        },
        '9-3': function() {
            setTimeout(function() {
                LANGUAGE.draw(1096, 570);
                triggerEvent('resize');
            }, 600);
        },
        '9-4': function() {
            setTimeout(function() {
                TECH.draw(1096, 570);
                triggerEvent('resize');
            }, 600);
        },
        destroy: function() {
            console.log('sadfsd')
            UX.destroy();
            LANGUAGE.destroy();
            TECH.destroy();
        }
    };

    var initChart = function() {
        var hash = win.location.hash;
        if (!hash) {
            return;
        }
        var e = Reveal.getIndices();
        var operMark = e.h + (e.v === 0 ? '' : '-' + e.v);
        if (!chartOper[operMark]) {
            return;
        }
        chartOper[operMark]();
    };

    setTimeout(function() {
        initChart();
    }, 10);

    Reveal.addEventListener('slidechanged', function(e) {
        var operMark = e.indexh + (e.indexv === 0 ? '' : '-' + e.indexv);
        var oper = chartOper[operMark];
        if (oper) {
            oper();
        } else {
            chartOper.destroy();
        }
    });

}(this, this.document, this.Reveal, this.UX, this.LANGUAGE, this.TECH));
