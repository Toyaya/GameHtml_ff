/**
 * Created by toya on 2017/1/15.
 */
$(function(){

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 600) {
            $(".hidden-xs").fadeIn();
        }
        else {
            $(".hidden-xs").fadeOut();
        }

    });

    $(window).resize(function(){

       if($(window).width()<=815){
           $(".col-sm-6").css("display","none");
       }
       else {
           $(".col-sm-6").fadeIn();
       }

    });


});
