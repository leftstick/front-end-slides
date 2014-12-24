'use strict';

var $ = require('jquery');
var UI = require('./core');
var animation = UI.support.animation;

/**
 * @via https://github.com/Minwe/bootstrap/blob/master/js/dropdown.js
 * @copyright (c) 2011-2014 Twitter, Inc
 * @license The MIT License
 */

// var toggle = '[data-am-dropdown] > .am-dropdown-toggle';

var Dropdown = function(element, options) {
  this.options = $.extend({}, Dropdown.DEFAULTS, options);

  options = this.options;

  this.$element = $(element);
  this.$toggle = this.$element.find(options.selector.toggle);
  this.$dropdown = this.$element.find(options.selector.dropdown);
  this.$boundary = (options.boundary === window) ? $(window) :
    this.$element.closest(options.boundary);
  this.$justify = (options.justify && $(options.justify).length &&
  $(options.justify)) || undefined;

  !this.$boundary.length && (this.$boundary = $(window));

  this.active = this.$element.hasClass('am-active') ? true : false;
  this.animating = null;

  this.events();
};

Dropdown.DEFAULTS = {
  animation: 'am-animation-slide-top-fixed',
  boundary: window,
  justify: undefined,
  selector: {
    dropdown: '.am-dropdown-content',
    toggle: '.am-dropdown-toggle'
  },
  trigger: 'click'
};

Dropdown.prototype.toggle = function() {
  this.clear();

  if (this.animating) {
    return;
  }

  this[this.active ? 'close' : 'open']();
};

Dropdown.prototype.open = function(e) {
  var $toggle = this.$toggle;
  var $element = this.$element;
  var $dropdown = this.$dropdown;

  if ($toggle.is('.am-disabled, :disabled')) {
    return;
  }

  if (this.active) {
    return;
  }

  $element.trigger('open.dropdown.amui').addClass('am-active');

  $toggle.trigger('focus');

  this.checkDimensions();

  var complete = $.proxy(function() {
    $element.trigger('opened.dropdown.amui');
    this.active = true;
    this.animating = 0;
  }, this);

  if (animation) {
    this.animating = 1;
    $dropdown.addClass(this.options.animation).
      on(animation.end + '.open.dropdown.amui', $.proxy(function() {
        complete();
        $dropdown.removeClass(this.options.animation);
      }, this));
  } else {
    complete();
  }
};

Dropdown.prototype.close = function() {
  if (!this.active) {
    return;
  }

  // fix #165
  // var animationName = this.options.animation + ' am-animation-reverse';
  var animationName = 'am-dropdown-animation';
  var $element = this.$element;
  var $dropdown = this.$dropdown;

  $element.trigger('close.dropdown.amui');

  var complete = $.proxy(function complete() {
    $element.
      removeClass('am-active').
      trigger('closed.dropdown.amui');
    this.active = false;
    this.animating = 0;
    this.$toggle.blur();
  }, this);

  if (animation) {
    $dropdown.removeClass(this.options.animation);
    $dropdown.addClass(animationName);
    this.animating = 1;
    // animation
    $dropdown.one(animation.end + '.close.dropdown.amui', function() {
      $dropdown.removeClass(animationName);
      complete();
    });
  } else {
    complete();
  }
};

Dropdown.prototype.checkDimensions = function() {
  if (!this.$dropdown.length) {
    return;
  }

  var $dropdown = this.$dropdown;
  var offset = $dropdown.offset();
  var width = $dropdown.outerWidth();
  var boundaryWidth = this.$boundary.width();
  var boundaryOffset = $.isWindow(this.boundary) && this.$boundary.offset() ?
    this.$boundary.offset().left : 0;

  if (this.$justify) {
    $dropdown.css({'min-width': this.$justify.width()});
  }

  if ((width + (offset.left - boundaryOffset)) > boundaryWidth) {
    this.$element.addClass('am-dropdown-flip');
  }
};

Dropdown.prototype.clear = function() {
  $('[data-am-dropdown]').not(this.$element).each(function() {
    var data = $(this).data('amui.dropdown');
    data && data['close']();
  });
};

Dropdown.prototype.events = function() {
  var eventNS = 'dropdown.amui';
  // triggers = this.options.trigger.split(' '),
  var $toggle = this.$toggle;

  $toggle.on('click.' + eventNS, $.proxy(this.toggle, this));

  /*for (var i = triggers.length; i--;) {
   var trigger = triggers[i];

   if (trigger === 'click') {
   $toggle.on('click.' + eventNS, $.proxy(this.toggle, this))
   }

   if (trigger === 'focus' || trigger === 'hover') {
   var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin';
   var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

   this.$element.on(eventIn + '.' + eventNS, $.proxy(this.open, this))
   .on(eventOut + '.' + eventNS, $.proxy(this.close, this));
   }
   }*/

  $(document).on('keydown.dropdown.amui', $.proxy(function(e) {
    e.keyCode === 27 && this.active && this.close();
  }, this)).on('click.outer.dropdown.amui', $.proxy(function(e) {
    // var $target = $(e.target);

    if (this.active &&
      (this.$element[0] === e.target || !this.$element.find(e.target).length)) {
      this.close();
    }
  }, this));
};

// Dropdown Plugin
function Plugin(option) {
  return this.each(function() {
    var $this = $(this);
    var data = $this.data('amui.dropdown');
    var options = $.extend({},
      UI.utils.parseOptions($this.attr('data-am-dropdown')),
      typeof option == 'object' && option);

    if (!data) {
      $this.data('amui.dropdown', (data = new Dropdown(this, options)));
    }

    if (typeof option == 'string') {
      data[option]();
    }
  });
}

$.fn.dropdown = Plugin;

// Init code
$(function() {
  $('[data-am-dropdown]').dropdown();
});

$(document).on('click.dropdown.amui.data-api', '.am-dropdown form', function(e) {
  e.stopPropagation();
});

$.AMUI.dropdown = Dropdown;

module.exports = Dropdown;

// TODO: 1. 处理链接 focus
//       2. 增加 mouseenter / mouseleave 选项
//       3. 宽度适应
