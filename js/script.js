//taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('.nav_menu').toggleClass('nav_menu-rotate');
        return false;
      }
    }
  });
});

$(".back").hide();
$(".back2").hide();

$(document).ready(function(){

  $(".nav_corner").on("click",function(){
    $('.nav_menu').toggleClass('nav_menu-rotate');
  });
  $("#menu-btn").on("click",function(){
    $('.nav_menu').toggleClass('nav_menu-rotate');
  });

  $(".arr-right").on("click",function(){
    var $slider = $(this).siblings()[0].children[0];
    var $slider2 = $(this).siblings()[1].children[0];
    var $slidersize = $slider.offsetWidth;
    if($(".front").css("display") == "block"){
      var $slidesize = $(this).siblings()[0].children[0].children[0].offsetWidth;
    } else{
      var $slidesize = $(this).siblings()[1].children[0].children[0].offsetWidth;
    }
    var $numSlides = $slidersize/$slidesize;
    var $margin = $($slider).css("marginLeft").replace("px","");
    var $index = - $margin / $slidesize;

    if($index < $($slider).children().length - 1){
      $index++;
    } else{
      $index = 0;
    }
    $($slider).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
    $($slider2).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
  });
  
  $(".arr-left").on("click",function(){
    var $slider = $(this).siblings()[0].children[0];
    var $slider2 = $(this).siblings()[1].children[0];
    var $slidersize = $slider.offsetWidth;
    if($(".front").css("display") == "block"){
      var $slidesize = $(this).siblings()[0].children[0].children[0].offsetWidth;
    } else{
      var $slidesize = $(this).siblings()[1].children[0].children[0].offsetWidth;
    }
    var $numSlides = $slidersize/$slidesize;
    var $margin = $($slider).css("marginLeft").replace("px","");
    var $index = - $margin / $slidesize;
    
    if($index > 0){
      $index--;
    } else{
      $index = $($slider).children().length - 1;
    }
    $($slider).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
    $($slider2).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
  });

  $(".arr-right2").on("click",function(){
    var $slider = $(this).siblings()[0].children[0];
    var $slider2 = $(this).siblings()[1].children[0];
    var $slidersize = $slider.offsetWidth;
    if($(".front2").css("display") == "block"){
      var $slidesize = $(this).siblings()[0].children[0].children[0].offsetWidth;
    } else{
      var $slidesize = $(this).siblings()[1].children[0].children[0].offsetWidth;
    }
    var $numSlides = $slidersize/$slidesize;
    var $margin = $($slider).css("marginLeft").replace("px","");
    var $index = - $margin / $slidesize;

    if($index < $($slider).children().length - 1){
      $index++;
    } else{
      $index = 0;
    }
    $($slider).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
    $($slider2).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
  });
  
  $(".arr-left2").on("click",function(){
    var $slider = $(this).siblings()[0].children[0];
    var $slider2 = $(this).siblings()[1].children[0];
    var $slidersize = $slider.offsetWidth;
    if($(".front2").css("display") == "block"){
      var $slidesize = $(this).siblings()[0].children[0].children[0].offsetWidth;
    } else{
      var $slidesize = $(this).siblings()[1].children[0].children[0].offsetWidth;
    }
    var $numSlides = $slidersize/$slidesize;
    var $margin = $($slider).css("marginLeft").replace("px","");
    var $index = - $margin / $slidesize;
    
    if($index > 0){
      $index--;
    } else{
      $index = $($slider).children().length - 1;
    }
    $($slider).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
    $($slider2).filter(":not(:animated)").animate({
      marginLeft: "-" + $index * $slidesize +"px"
    },500);
  });

  $(".det_prog").on("click",function(){
    $(".front2").toggle();
    $(".back2").toggle();
  });

  $(".det_design").on("click",function(){
    $(".front").toggle();
    $(".back").toggle();
  });

});