$(function() {
	$('#fullpage').fullpage();
	new WOW().init();
	
	var languageVersion = $('.btn-language'),
		englishVersion = $('.en'),
		polishVersion = $('.pl');
	
		englishVersion.css('display','none');
	
	languageVersion.click(function(){
		if(englishVersion.css('display')=== 'none'){
			englishVersion.css('display','block');
			polishVersion.css('display','none');
			languageVersion.html('pl');	
		} else {
			englishVersion.css('display','none');
			polishVersion.css('display','block');
			languageVersion.html('en');	
		}
	})
	
	$(".scroll__down").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#slide2").offset().top
		}, 700);
	});
	
});

