var switcher = 0;
$(".menubtn").click(function(){
	if (switcher === 0) {
		$(".frame.menu").slideDown(200);
		$(".menubtn").css("transform","rotate(-90deg)");
		switcher = 1;
	}else {
		$(".menu").slideUp(200);
		$(".menubtn").css("transform","rotate(0deg)");
		switcher = 0;
	}
});

