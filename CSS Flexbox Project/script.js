$(document).ready(function() {
  $("button.toggleNav").on("click",function() {
    var id = $(".wrapper.bars").attr('id');
    var navDisplay = $("nav").css("display");
    if (id=='') {
      $(".wrapper.bars").attr('id','bar');
      $("nav").css("display","block");
      $("button.toggleNav").css("top","-307px");
    }
    else {
      $(".wrapper.bars").attr('id','');
      $("nav").css("display","none");
      $("button.toggleNav").css("top","-75%");
    }

  })
});

$(window).resize(function(){
     if ($(window).width() < 464 && $(window).width() > 250) {
       $(".wrapper.bars").attr('id','');
       $("nav").css("display","none");
       $("button.toggleNav").css("top","-45px");
     }
     else {
       $("nav").css("display","block");
     }
});
