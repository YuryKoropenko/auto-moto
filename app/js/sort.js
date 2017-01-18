$(document).ready(function() {
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
});