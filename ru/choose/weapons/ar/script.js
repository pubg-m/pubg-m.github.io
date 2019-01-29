$(document).ready(function() {

$(".w-item").on("click", function() {
	$(this).toggleClass("active").css("background", "linear-gradient(to bottom, #B98847, #FDF4A5)");
	$(".w-item").toggleClass("no-active");
	$(".info").toggleClass("info-act");
})

});