$(document).ready(function(){
    
    //네비게이션 메뉴
    
    $('.dp2').hide();
    $('.gnb>li').mouseenter(function(){
        $('.dp2').stop().slideDown();
        
    });
    
    $('.gnb>li').mouseleave(function(){
        $('.dp2').stop().slideUp();
        
    });
    
    //연령
    
    $('.age_dp2').hide();
    $('.age').click(function(){
        $('.age_dp2').stop().slideDown();
    });
    
    $('.age_dp2').mouseleave(function(){
        $(this).stop().slideUp();
        });  
    
  
    
    //메인 버튼
    $('.btn_box > input[type="button"]').click(function(){
        $(this).css('background','green');
           
      
    });
    
    
    
   
    
    //메인배너슬라이더
    
    $('.mb').bxSlider({
            auto:true
 
        });
    
    //sns슬라이드
    
    var slider = $(".snslist").bxSlider({
        auto:true,
        autoControls: true,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth:240,
        pager: false
        
        
        
        
    });
    
    var slider = $(".nb_mv").bxSlider({
        auto:true,
        maxSlides: 2,
        moveSlides: 1,
        slideWidth:410,
        pager: false
        
        
        
        
    });
    
    $('.heart_btn').click(function(){
        $(this).css('opacity', '1');
    });
    
    // menu_detail 슬라이드 
    var slider = $(".photo_list").bxSlider({
        auto:false,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth:420,
        pager: false
        
        
        
        
    });
    
    
    
    });
    
    
    