(function ($) {
	$.fn.bestAmpersand = function (options) {
		var settings = $.extend({ class: 'ampersand' }, options);

		$(this).each(function () {
			$(this).html($(this).html().replace(' &amp; ', '<span class="' + settings.class + '">&</span>'));
		});
	}
}) (jQuery);