$(document).ready(function() {

$(".fa-bars").on("click", function() {
	$(".mb-menu").toggleClass("mb-act");
	$(".home").toggleClass("home-bye");
	$(".weapons-types").toggleClass("w-t-bye");
	$(this).toggleClass("bars-act");
})

});