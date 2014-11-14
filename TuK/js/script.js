$(document).ready(function () {

// 	var content = $('#content');
// 	var body = $('body');
// 	var head = $('head');

// // Names of the sites
 	var startpage = "index.php";
 	var page1 = "PHILOSOPHIE.php";

 	var currentPage = location.pathname.split('/').slice(-1)[0];


	document.onscroll = scroll;

	function scroll() {

		var size= 279;

	    if ($(window).scrollTop() >= size) {
	        $('.navbar').addClass('navbar-fixed-top');
	        $('.navbar').css('top','0px');
	    } else {
	        $('.navbar').removeClass('navbar-fixed-top');
	        $('.navbar').css('top',size);
	    }
	}

	//Set Selected Chapter
	if(currentPage==page1){
		$('.page1').addClass('active');
	}  

// 	$('ul.nav li.dropdown a').hover(function(){
// 		console.log("hover");
//        $(this).parent().children('ul.dropdown-menu').slideDown(); 
//     }, function(){
//        $(this).parent().children('ul.dropdown-menu').slideUp(); 
// });

});