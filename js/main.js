jQuery(document).ready(function($){
    $('.slider-container').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        dots:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay:true,
        autoplaySpeed:1500,
})
   $('.ham-menu').on('click',function(){
    $('.nav-items').toggle();
   })

   $(document).ready(function($){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".nav-container").css("background" , "white");
        }
  
        else{
            $(".nav-container").css("background" , "transparent");  	
        }
    })
  })
})
    

  

