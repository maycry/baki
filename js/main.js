jQuery(document).ready(function($) {

	/*-------languages-start-------*/
	$(".language-current").click(function(event) {
		event.stopPropagation();
		$(this).toggleClass('active');
		$(this).toggleClass('hover');
		$(".language-popup").toggle();
		return false;
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
	$(document).bind('keydown', function(e) { 
    if (e.which == 27) {
			$(".language-popup").hide();
			$(".language-current").removeClass('active');
    }
  });
	$("html").click(function(event) {
		$(".language-popup").hide();
		$(".language-current").removeClass('active');
		return false;
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


	/*-------products-group-start-------*/
	$(".product-kasko").click(function(event) {
		$(this).toggleClass('product-active');
		$(".slider").toggle();
		$(".products-all-group").toggle();

		return false;

	});
	$(document).bind('keydown', function(e) { 
    if (e.which == 27) {
			$(".product-kasko").removeClass('product-active');
			$(".slider").show();
			$(".products-all-group").hide();
    }
  });
	/*-------products-group-end-------*/
	

	/*-------overlay-start-------*/
	$(".overlay-popup .close").click(function(event) {
		$("body").removeClass('overlay-enabled');
		return false;
	});
	$(document).bind('keydown', function(e) { 
    if (e.which == 27) {
			$("body").removeClass('overlay-enabled');
    }
  });
	$(".overlay-popup").click(function(event) {
		event.stopPropagation();
		return false;
	});
	$("html").click(function(event) {
		$("body").removeClass('overlay-enabled');
		return false;
	});
	$(".js-open-login").click(function(event) {
		event.stopPropagation();
		$("body").addClass('overlay-enabled');
		return false;
	});
	/*-------overlay-end-------*/
});