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
		$(this).children('.menu__drop-down').stop(true, false).fadeIn();
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
		$(this).toggleClass('corz__b-center-2-row-lab-active');
	});

/**/

	$(".filter__price-sl").slider({
		range: true,
		min: 0,
		max: 8650,
		values: [ 1435, 8650 ],
		slide: function( event, ui ) {
			$( ".filter__price-first" ).val( ui.values[ 0 ] );
			$( ".filter__price-last" ).val( ui.values[ 1 ] );
		}
	});
	$( ".filter__price-first" ).val( $( ".filter__price-sl" ).slider( "values", 0 ) );
	$( ".filter__price-last" ).val( $( ".filter__price-sl" ).slider( "values", 1 ) );

/**/
	$('.contacts__tabs-wp').lightTabs();
});