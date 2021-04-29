// JavaScript Document

$(document).ready(function () {

        //상단고정
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#header").addClass("fix");
    } else {
        $("#header").removeClass("fix");
    }
});
    
    
    
    
    //스크롤트리거
    $(window).scroll(function () {
    $('.ani_stop').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).removeClass('ani_stop');
        }
        if (bottom_of_window < bottom_of_object) {
            $(this).addClass('ani_stop');
        }
    });
});
    
//wrap _mobile_menu
    
    
    $('.m_btn').click(function(){
       $('.m_gnb').animate({
           left:"0"
       });
    });
    
    $('#contents').click(function(){
        $('.m_gnb').animate({
           left:'-100%'
       });
    });
    
    
    
    
    
    
    
    // 메인슬라이드
    $(".mb").bxSlider({
        auto: true,
        
    });

    
  
     //new product 슬라이드
        
$('.new_list').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 949,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1,
           
      }
    }
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
       
    
    
    
    
    
    
    
    });
    
    
    
    
    
    
    
    
    
    
    








