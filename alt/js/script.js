$(document).ready(function() {

    // 	var content = $('#content');
    // 	var body = $('body');
    // 	var head = $('head');

    // // Names of the sites
    var startpage = "index.php";
    var page1 = "PHILOSOPHIE.php";
    var page2 = "TANZTHERAPIE.php";
    var page3 = "TAENZERIN.php";
    var page4 = "KOERPERTHERAPIE.php";
    var page5 = "WASSERTHERAPIE.php";
    var page6 = "HEIDE.php";
    var page7 = "VITA.php";
    var page8 = "SYLT.php";
    var page9 = "INDIVIDUELL.php";
    var page10 = "IMPRESSIONEN.php";
    var page11 = "LITERATUR.php";
    var page12 = "IMPRESSUM.php";
    var page13 = "AKTUELL.php";

    var size = 279;

    var currentPage = location.pathname.split('/').slice(-1)[0];


    $(window).resize(function() {
        origOffsetY = $('#content > .images > img').outerHeight();
        if(origOffsetY === 0){
        	origOffsetY = $('#slideshow').outerHeight();
        }
        // console.log("window resize: "+ origOffsetY);
        resizeContent(origOffsetY);

    });

    function scroll() {

        var size = $('#content > .images > img').outerHeight();
        var navSize = $('ul.navbar-nav>li').innerHeight();

        if(size==null){
            size= $('#slideshow').outerHeight();
        }

        if($( window ).width() < 1185){
            navSize=navSize+20;
        }
        
        
        if($('.navbar-collapse').hasClass('in') && $( window ).width() < 768 ){
                if( $('.navbar-collapse').length == 0){
                    
                }else{
                    navSize = $('.navbar-collapse').outerHeight();
                }
        }


        if ($(window).scrollTop() >= size) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navbar').css('top', '0px');
            $('.main').css('padding-top', navSize);
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.navbar').css('top', size - 20);
            $('.main').css('padding-top', navSize);
            if($('#slideshow').outerHeight()>0){
            	$('.main').css('padding-top', navSize);
            }
        }
    }


    //Set Selected Chapter
    if (currentPage == page1) {
        $('.page1').addClass('active');
    }
    else if(currentPage == page2 || currentPage == page3){
        $('.page2').addClass('active');
    }
    else if(currentPage == page4){
        $('.page4').addClass('active');
    }
    else if(currentPage == page5){
        $('.page5').addClass('active');
    }
    else if(currentPage == page6 || currentPage == page8 || currentPage == page9|| currentPage == page10){
        $('.page6').addClass('active');
    }
    else if(currentPage == page7|| currentPage == page11|| currentPage == page12){
        $('.page7').addClass('active');
    }
        else if(currentPage == page13){
        $('.page8').addClass('active');
    }

    $('#content > .images > img').load(function(){
        // console.log('Image is loaded!'); 
        scroll();
    }).error(function(){
        // console.log('Image is not loaded!');
    });

    function resizeContent(offset) {
        console.log("resize: "+offset);

        $('.item').each(function(index) {
            //$(this).css('height', offset);
        });
        	$('.navbar').css('top', offset+20);

        scroll();
    }

    document.onscroll = scroll;
    scroll();
    
    resizeContent(size);
    //scroll();

    // 	$('ul.nav li.dropdown a').hover(function(){
    // 		console.log("hover");
    //        $(this).parent().children('ul.dropdown-menu').slideDown(); 
    //     }, function(){
    //        $(this).parent().children('ul.dropdown-menu').slideUp(); 
    // });


    // Mehr lesen

    // Configure/customize these variables.
    // var showChar = 1000; // How many characters are shown by default
    // var ellipsestext = "...";
    // var moretext = "Mehr lesen >";
    // var lesstext = "Weniger lesen";


    // $('.more').each(function() {
    //     var content = $(this).html();

    //     if (content.length > showChar) {

    //         var c = content.substr(0, showChar);
    //         var h = content.substr(showChar, content.length - showChar);

    //         var html = c + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

    //         $(this).html(html);
    //     }

    // });

    // $(".morelink").click(function() {
    //     if ($(this).hasClass("less")) {
    //         $(this).removeClass("less");
    //         $(this).html(moretext);
    //     } else {
    //         $(this).addClass("less");
    //         $(this).html(lesstext);
    //     }
    //     $(this).parent().prev().toggle(100);
    //     $(this).prev().toggle(100);
    //     return false;
    // });
$("#random").click(function() {

    var linkList= ["https://www.youtube.com/watch?v=Zx6gr_Ch9x8",
    "https://www.youtube.com/watch?v=4L_DQKCDgeM",
    "https://www.youtube.com/watch?v=GAidn80OBEw",
    "https://www.youtube.com/watch?v=5aGTDvmNB-4",
    "http://www.youtube.com/watch?v=HEaERAnIqsY",
    "pdf/EineEinladungzueinemSpaziergang.pdf"];
    var randomInt = Math.floor((Math.random() * 6));

    window.open(linkList[randomInt]);
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


    $(".message").hide();
    $("span.readmore").click(function(){
        $(".message").show("slow", function() {
    $('.contentRight').css('height', $('.contentLeft').outerHeight());
    $('.myFooterLink').css('visibility','visible');
  });
        $(this).hide();
        
    });

    $('.contentRight').css('height', $('.contentLeft').outerHeight());
        

});