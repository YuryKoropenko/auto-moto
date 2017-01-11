$(document).ready(function() {
/**/
	$('.menu__item').mouseenter(function() {
		$(this).addClass('menu__link-active');
		$(this).children('.menu__drop-down').stop(true, false).fadeIn();
	});
	$('.menu__item').mouseleave(function() {
		$(this).removeClass('menu__link-active');
		$(this).children('.menu__drop-down').stop(true, false).hide();
	});
});