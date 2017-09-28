$(function(){
	
	var cross = $( ".cross-btn"),
		hamburger  = $( ".hamburger-btn" ),
		menu =$(".res__nav"),
		menuLink = menu.find("li");
	
	cross.hide();
	menu.hide();
	
	hamburger.click(function() {
		menu.slideToggle( "slow", function() {
		hamburger.hide();
		cross.show();
		});
	});
	
	cross.click(function() {
		menu.slideToggle( "slow", function() {
		cross.hide();
		hamburger.show();
		});
	});
	
	menuLink.click(function(){
		menu.slideToggle( "slow", function() {
		cross.hide();
		hamburger.show();
		});
	})
	
})