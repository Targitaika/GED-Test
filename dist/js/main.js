var klient_width;
var klient_height;
var scroll_top;
var scroll_left;



$(document).ready(function(){
	var menu = $('.header__bottom');
	var menuHeight = $('.header__bottom').height();
	var menuPosition = $('.header__bottom').offset().top;
	function menuFixed(){

		var windowPosition = $(window).scrollTop();
		if (windowPosition >= menuPosition){
			menu.css("position", "fixed");
			menu.css("top", "0px");
			console.log('fixed')

		} else {
			menu.css("position","absolute");
			menu.css("top", menuPosition + 'px');
			console.log('abs')

		}
		console.log('1', menuPosition, menuHeight)
	};
	$(window).scroll(function() {
		menuFixed()

	})
})
