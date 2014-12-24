'use strict';

require('./core');
require('./ui.collapse');
var $ = require('jquery');
var UI = $.AMUI;

function accordionInit() {
  var $accordion = $('[data-am-widget="accordion"]');
  var selector = {
    item: '.am-accordion-item',
    title: '.am-accordion-title',
    body: '.am-accordion-bd'
  };

  $accordion.each(function(i, item) {
    var options = UI.utils.parseOptions($(item).attr('data-am-accordion'));
    var $title = $(item).find(selector.title);

    $title.on('click.accordion.amui', function() {
      var $collapse = $(this).next(selector.body);
      var $parent = $(this).parent(selector.item);
      var data = $collapse.data('amui.collapse');

      $parent.toggleClass('am-active');

      if (!data) {
        $collapse.collapse();
      } else {
        $collapse.collapse('toggle');
      }

      !options.multiple &&
      $(item).children('.am-active').
        not($parent).removeClass('am-active').
        find(selector.body + '.am-in').collapse('close');
    });
  });
}

// Init on DOM ready
$(function() {
  accordionInit();
});

module.exports = $.AMUI.accordion = {
  VERSION: '2.0.0',
  init: accordionInit
};
