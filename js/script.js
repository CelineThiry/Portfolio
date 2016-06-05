$(function() {
    console.log( "ready!" );
    var Myburger = $('.burger');

	Myburger.on('click', function(e){
		e.preventDefault();
		console.log('Myburger is cliqued');
		$('#sidebar').toggleClass('active');
	});

	var layer2Slide = $('div.layer2');

	layer2Slide.on('click', function(e){
		e.preventDefault();
		console.log('layer2Slide is cliqued');
		$(this).toggleClass('active');
	});


});
	
