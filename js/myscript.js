/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    
    // for whatsapp links


    $('.orderNow').click(function(e){
        e.preventDefault();
        var orderNow = " اطلب الان";
        var full = "https://wa.me/+201145476545?text=Merhaba%20Şamista,"  + orderNow + "الأن %20 اطلب%20" ; 
        window.location.href= full;  
    });
    
    
    // loading screen
    
    $(window).on('load', function() {
        $("body").css("overflow","auto")
		$(".loading-overlay").fadeOut("2000");;
    });
    
    
    // the header scroll 
    var scrollHeader = $("#headerMoving");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 200){
            scrollHeader.addClass('header-scroll');
        }
        else{
            scrollHeader.removeClass('header-scroll');
        }
    });

    $("header .container > .row > div:nth-child(2) > ul > li > a , footer .container > div:nth-child(1) a").on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop : $("#" + $(this).data('scroll')).offset().top - 40
        }, 1000);
    });
    
    
    
    
    /*$("header li a").on("click", function () {
        //$(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $("header a").removeClass('active');
        $(this).addClass('active');
    });*/
    
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
    });
    
    scrollButton.click(function(){
            
        $("html, body").animate({ scrollTop: 0}, 2000);

    });
    
     // menu bars at mobile screen
    
    $("header .container > .row > div:nth-child(1) i").click(function(){
       
        $("header .container > .row > div:nth-child(2)").fadeToggle(500)
                
    });
    
    // menu bars at navigations
    $("header .container > .row > div:nth-child(2) > ul li:nth-of-type(4)").hover(function(){
       
        $("header .container > .row > div:nth-child(2) > ul li:nth-of-type(4) ul").slideToggle(300)
                
    });

    // question part
    
    $(".questions .container .row > div > div h5").click(function(){
        $(this).toggleClass('cssp');
        $(this).siblings("p").slideToggle(500);
        
    });
    
    
    // magic carousel
    
    $('#cascade-slider').cascadeSlider({
      itemClass: 'cascade-slider_item',
      arrowClass: 'cascade-slider_arrow'
    });
          
    
});