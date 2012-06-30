(function ($) {
	$.fn.bestAmpersand = function (options) {
		var defaults = { "class": "ampersand" },
				settings = $.extend(defaults, options);

		return this.each(function () {
			var $this = $(this);
			$this.html($this.html().replace(' &amp; ', ' <span class="' + settings['class'] + '">&</span> '));
		});
	};
}) (jQuery);
