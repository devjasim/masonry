$(document).ready(function(){
	var $grid = $('.grid-group').isotope({
		itemSelector: '.grid',
		masonry: {
		  columnWidth:1,
		}
	  });
	
	  // filter items on button click
	  $('.filter-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
})