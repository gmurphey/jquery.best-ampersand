(function ($) {
	$.fn.bestAmpersand = function (options) {
		var settings = $.extend({ 'class': 'ampersand' }, options);

		return this.each(function () {
			var $this = $(this);
			$this.html($this.html().replace(' &amp; ', ' <span class="' + settings['class'] + '">&</span> '));
		});
	}
}) (jQuery);