/*! jQuery Best Ampersand - v0.1.0 - 2012-07-01
* https://github.com/gmurphey/jQuery-Best-Ampersand
* Copyright (c) 2012 Garrett Murphey; Licensed MIT, GPL */

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
