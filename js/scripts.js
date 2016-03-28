$(function() {
	$('#enter-btn button').click(function() {
		$('.container.login').animate({top: 0});
	});
});

$(function(){
	$("#register-btn").on('click', function() {
		parent.closeIFrame();
	});	
})


