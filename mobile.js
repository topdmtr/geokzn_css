func_menu = (function() {
	var win_w = $(window).width();
    if (win_w < 553){
		$('a.js-drop-menu-link').attr('href', '');
	}
	else
		$('a.js-drop-menu-link').attr('href', 'javascript:void(0)');
});
$(window).resize(func_menu);
