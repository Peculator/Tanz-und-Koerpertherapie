$(document).ready(function() {

    // 	var content = $('#content');
    // 	var body = $('body');
    // 	var head = $('head');

    // // Names of the sites
    var startpage = "index.php";
    var page1 = "PHILOSOPHIE.php";
    var size = 279;

    var currentPage = location.pathname.split('/').slice(-1)[0];


    $(window).resize(function() {
        origOffsetY = $('#content > .images > img').outerHeight();
        console.log(origOffsetY);
        resizeContent(origOffsetY);

    });

    function scroll() {

        var size = $('#content > .images > img').outerHeight();
        var navSize = $('.navbar').outerHeight();

        console.log(navSize);

        if ($(window).scrollTop() >= size) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navbar').css('top', '0px');
            $('.main').css('padding-top', navSize);
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.navbar').css('top', size);
            $('.main').css('padding-top', navSize);
        }
    }

    //Set Selected Chapter
    if (currentPage == page1) {
        $('.page1').addClass('active');
    }

    function resizeContent(offset) {
        console.log("resize");
        var size = $('#content > .images > img').outerHeight();
        $('.item').each(function(index) {
            $(this).css('height', offset);
        });
        $('.navbar').css('top', (offset));
        scroll();
    }

    document.onscroll = scroll;
    scroll();
    resizeContent(size);

    // 	$('ul.nav li.dropdown a').hover(function(){
    // 		console.log("hover");
    //        $(this).parent().children('ul.dropdown-menu').slideDown(); 
    //     }, function(){
    //        $(this).parent().children('ul.dropdown-menu').slideUp(); 
    // });


    // Mehr lesen

    // Configure/customize these variables.
    var showChar = 1000; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Mehr lesen >";
    var lesstext = "Weniger lesen";


    $('.more').each(function() {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function() {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle(100);
        $(this).prev().toggle(100);
        return false;
    });

    $('.navbar-collapse').on('hidden.bs.collapse', function () {
  		scroll();
    });
     $('.navbar-collapse').on('shown.bs.collapse', function () {
  		//scroll();
    });
     $('.navbar-collapse').on('hide.bs.collapse', function () {
  		//scroll();
    });
     $('.navbar-collapse').on('show.bs.collapse', function () {
     	var navSize = $('.navbar').outerHeight();
     	$('.main').css('padding-top', navSize+280);
  		//scroll();
    });

     $('.dropdown').on('show.bs.dropdown', function () {
		var navSize = $('.navbar').outerHeight();
     	$('.main').css('padding-top', navSize);
     	//scroll();
	});

          $('.dropdown').on('shown.bs.dropdown', function () {
		var navSize = $('.navbar').outerHeight();
     	$('.main').css('padding-top', navSize);
     	//scroll();
	});
     $('.dropdown').on('hidden.bs.dropdown', function () {
		var navSize = $('.navbar').outerHeight();
     	$('.main').css('padding-top', navSize+280);
     	scroll();
	});

        

});