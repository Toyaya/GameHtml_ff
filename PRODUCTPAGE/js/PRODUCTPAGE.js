/**
 * Created by toya on 2017/2/1.
 */
$(function () {

    //下拉菜单

    $(".nav_lang").click(function(){
        if($(".pc_view2").text()=="∨"){
            $(".nav_ul").fadeIn(400);
            $(".pc_view2").text("∧");

        }
        else{
            $(".nav_ul").fadeOut(400);
            $(".pc_view2").text("∨");
        }

    });

    //按钮
    $(".btn_ldst_link").hover(function () {
        $(".no").fadeIn();
    },function () {
        $(".no").fadeOut();
    });

    //返回最上面
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $(".page-top").fadeIn();
        }
        else {
            $(".page-top").fadeOut();
        }

    });

    $(".page-top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);});


});