(function ($) {
	$.fn.bestAmpersand(function (options = {}) {
		var settings = $.extend({ class: 'ampersand' }, options);

		$(this).each(function () {
			$(this).text($(this).text().replace('&', '<span class="' + settings.class + '">&</span>'));
		});
	});
});