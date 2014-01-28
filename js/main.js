jQuery(document).ready(function($) {
	$(".language-current").click(function(event) {
		event.stopPropagation();
		$(".language-popup").toggle();
	});
	$(".language-popup").click(function(event) {
		event.stopPropagation();
	});
	window.onkeyup = function (event) {
		if (event.keyCode == 27) {
			$(".language-popup").hide();
		}
	}
	$("html").click(function(event) {
		$(".language-popup").hide();
	});
});