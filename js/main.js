jQuery(document).ready(function($) {

	/*-------languages-start-------*/
	$(".language-current").click(function(event) {
		event.stopPropagation();
		$(this).toggleClass('active');
		$(this).toggleClass('hover');
		$(".language-popup").toggle();
	});
	$(".language-current").mouseover(function(event) {
		if (!$(this).hasClass('active')) {
			$(this).addClass('hover')
		};
	});
	$(".language-current").mouseleave(function(event) {
		if (!$(this).hasClass('active')) {
			$(this).removeClass('hover')
		};
	});
	$(".language-popup").click(function(event) {
		event.stopPropagation();
	});
	window.onkeyup = function (event) {
		if (event.keyCode == 27) {
			$(".language-popup").hide();
			$(".language-current").removeClass('active');
		}
	}
	$("html").click(function(event) {
		$(".language-popup").hide();
		$(".language-current").removeClass('active');
	});
	/*-------languages-end-------*/


	/*-------tabs-start-------*/

	$(".tabs a").click(function(event) {
		$(".tabs a").removeClass('hover');
		$(".tabs a").removeClass('active');
		$(this).addClass('active');
		$(".tab-content").hide();
		i = $(this).data("block")
		$("."+i).show();
		return false;
	});
	$(".tabs a").mouseover(function(event) {
		$(".tabs a").removeClass('hover');
		$(this).addClass('hover');
		return false;
	});
	$(".tabs a").mouseleave(function(event) {
		$(this).removeClass('hover');
		return false;
	});
	/*-------tabs-end-------*/



});