$(document).ready(function() {

/**/
	$('.basket').on('click', function() {
		$(this).children('.basket__popup-wp').fadeIn();
		$(this).children('.basket__popup').fadeIn();
		$('.basket__popup-wp').on('click', function() {
			$(this).fadeOut();
			$('.basket__popup').fadeOut();
			return false
		});
	});

/**/
	$('.menu__item').mouseenter(function() {
		$(this).addClass('menu__link-active');
		$(this).children('.menu__drop-down').stop(true, false).show();
	});
	$('.menu__item').mouseleave(function() {
		$(this).removeClass('menu__link-active');
		$(this).children('.menu__drop-down').stop(true, false).hide();
	});

/**/
	$('.sponsors-arrow__left').on('click', function(e) {
		$('.slick-prev').trigger('click', false);
	});

	$('.sponsors-arrow__right').on('click', function(e) {
		$('.slick-next').trigger('click', false);
	});

/**/
	$('.corz__b-center-2-row-lab').on('click', function() {
		$('.corz__b-center-2-row-lab').removeClass('corz__b-center-2-row-lab-active');
		$(this).addClass('corz__b-center-2-row-lab-active');
	});

/**/
	$('.card__description-link-full').on('click', function() {
		$(this).remove();
		$('.card__description-text-show').show();
		return false;
	});
	$('.card__info-wp-link-full').on('click', function() {
		$(this).remove();
		$('.card__info-wp-row-show').show();
		return false;
	});

/**/
	$('.overlay').on('click', function() {
		$(this).remove();
	});
});