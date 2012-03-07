jQuery Plugin: Best Ampersand
=============================

Finds ampersands within the selector(s) and surrounds them with a span, enabling the use of CSS to produce the best ampersand.

By Example
----------

``` javascript
$(function () {
	$('h2').bestAmpersand();
});
```

``` html
<!-- original -->
<h2>Ampersands &amp; Other Logograms</h2>
<p>This is test text.</p>

<!-- after BestAmpersand -->
<h2>Ampersands <span class="ampersand">&amp;</span> Other Logograms</h2>
<p>This is test text.</p>
```