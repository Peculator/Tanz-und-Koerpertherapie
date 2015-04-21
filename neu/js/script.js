// $(window).load(

//     var size = $('#content > .images > img').outerHeight();

//         console.log("load: " + size);
//         if(size==null){
//             size= $('.images').outerHeight(false);
//         }
    
//     if ($(window).scrollTop() >= size) {
//             $('.navbar').addClass('navbar-fixed-top');
//             $('.navbar').css('top', '0px');
//             $('.main').css('padding-top', navSize);
//         } else {
//             $('.navbar').removeClass('navbar-fixed-top');
//             $('.navbar').css('top', size - 20);
//             $('.main').css('padding-top', navSize);

//             if($('.images').outerHeight()>0){
//                 $('.main').css('padding-top', $('.images').outerHeight(false));
//                 console.log("outer: "+$('.images').outerHeight(false));
                
//             }
//         }
//     );


$(window).load(function() {

//neues zeug
$('.carousel').carousel({
  pause:"false"
})

$('#content > .images > img').load(function(){
        console.log('Image is loaded!'); 
        scroll();
    }).error(function(){
        console.log('Image is not loaded!');
    });

    $('.images img').load(function(){
        console.log('Image is loaded!'); 
        scroll();
    }).error(function(){
        console.log('Image is not loaded!');
    });


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

    var size = 397;

    var currentPage = location.pathname.split('/').slice(-1)[0];


    $(window).resize(function() {
        origOffsetY = $('#content > .images > img').outerHeight();
        //console.log(origOffsetY);
        if(origOffsetY === 0){
        	origOffsetY = $('.images').outerHeight(false);
        }
        // console.log("window resize: "+ origOffsetY);
        resizeContent(origOffsetY);

    });

    function scroll() {

        var size = $('#content > .images > img').outerHeight();
        var navSize = $('ul.navbar-nav>li').innerHeight();

        console.log("scrollA: " + size);
        if(size==null){
            size= $('.images').outerHeight(false);
            console.log(size);
        }

        console.log("scrollB: " + size);
        
        // if($('.navbar-collapse').hasClass('in') && $( window ).width() < 768 ){
        //         if( $('.navbar-collapse').length == 0){
                    
        //         }else{
        //             navSize = $('.navbar-collapse').outerHeight();
        //         }
        // }


        if ($(window).scrollTop() >= size) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navbar').css('top', '0px');
            $('.main').css('padding-top', navSize);
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.navbar').css('top', size - 20);
            $('.main').css('padding-top', navSize);

            if($('.images').outerHeight()>0){
            	$('.main').css('padding-top', $('.images').outerHeight(false));
                console.log("outer: "+$('.images').outerHeight(false));
                
            }
        }
    }


    //Set Selected Chapter
    if (currentPage == page1) {
        $('.page1').addClass('active');
    }
    else if(currentPage == page2 || currentPage == page3){
        $('.page2').addClass('active');

        if(currentPage == page2)
            $('.subPageA').addClass('active');
        else{
           $('.subPageB').addClass('active'); 
        }
    }
    else if(currentPage == page4){
        $('.page4').addClass('active');
    }
    else if(currentPage == page5){
        $('.page5').addClass('active');
    }
    else if(currentPage == page6 || currentPage == page8 || currentPage == page9|| currentPage == page10){
        $('.page6').addClass('active');

        if(currentPage == page6)
            $('.subPageC').addClass('active');
        if(currentPage == page8)
            $('.subPageD').addClass('active');
        if(currentPage == page9)
            $('.subPageE').addClass('active');
        if(currentPage == page10)
            $('.subPageF').addClass('active');
    }
    else if(currentPage == page7|| currentPage == page11|| currentPage == page12){
        $('.page7').addClass('active');

         if(currentPage == page7)
            $('.subPageG').addClass('active');
        if(currentPage == page11)
            $('.subPageH').addClass('active');
        if(currentPage == page12)
            $('.subPageI').addClass('active');

    }
        else if(currentPage == page13){
        $('.page8').addClass('active');
    }


    function resizeContent(offset) {
        console.log("resize: "+offset);
        if(offset==null)
            offset = 397;

        $('.item').each(function(index) {
            //$(this).css('height', offset);
        });
        	$('.navbar').css('top', offset+20);
            scroll();
    }

    document.onscroll = scroll;
    scroll();
    
    resizeContent(size);
    

    $(".message").hide();
    $("span.readmore").click(function(){
        $(".message").show("slow", function() {
    $('.contentRight').css('height', $('.contentLeft').outerHeight());
    $('.myFooterLink').css('visibility','visible');
  });
        $(this).hide();
        
    });
        

});