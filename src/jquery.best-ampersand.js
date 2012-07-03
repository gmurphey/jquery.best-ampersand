/*
 * jquery.best-ampersand
 * https://github.com/gmurphey/jQuery-Best-Ampersand
 *
 * Copyright (c) 2012 Garrett Murphey
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  $.fn.bestAmpersand = function(options) {
    var defaults = { "class": "ampersand" },
        settings = $.extend(defaults, options);

    return this.each(function() {
      var $this = $(this);
      $this.html($this.html().replace(/ \&amp\; /g, ' <span class="' + settings['class'] + '">&</span> '));
    });
  };

}(jQuery));
