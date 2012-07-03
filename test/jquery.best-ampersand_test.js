/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

	/*
		======== A Handy Little QUnit Reference ========
		http://docs.jquery.com/QUnit

		Test methods:
			expect(numAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			raises(block, [expected], [message])
	*/

	module('jQuery#best-ampersand', {
		setup: function() {
			this.elems = $('#qunit-fixture').children();
		}
	});

	test('is chainable', 1, function() {
		strictEqual(this.elems.bestAmpersand(),
			this.elems,
			'should be chaninable');
	});

	test('does not makes awesome ampersands where there aren\'t any', 1, function() {
		strictEqual(this.elems.eq(0).bestAmpersand().html(),
			'no ampersands',
			'should not have an ampersand');
	});

	test('hijacks one ampersand', 1, function() {
		strictEqual(this.elems.eq(1).bestAmpersand().html(),
			'one ampersand <span class="ampersand">&amp;</span> it is awesome',
			'should have one awesome ampersand');
	});

	test('hijacks multiple ampersands', 1, function () {
		strictEqual(this.elems.eq(2).bestAmpersand().html(),
			'two ampersands <span class="ampersand">&amp;</span> it <span class="ampersand">&amp;</span> the other are awesome',
			'should have multiple awesome ampersands');
	});

	test('can take a user-defined class', 1, function () {
		strictEqual(this.elems.eq(1).bestAmpersand({ 'class': 'amp' }).html(),
			'one ampersand <span class="amp">&amp;</span> it is awesome',
			'should have `amp` class');
	});

}(jQuery));
