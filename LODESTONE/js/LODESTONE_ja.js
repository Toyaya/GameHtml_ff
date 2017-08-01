/**
 * Created by toya on 2017/1/10.
 */
$(function () {
//下拉菜单
$(".brand_search_text").focus(function () {
$(".brand_search").animate({
        width:'240px',});
    $("#txt_search").animate({
        width:'200px',});

    $(".brand_search_focus_bg").animate({
        opacity:1,});
    $(".brand_search_base_bg").animate({
        opacity:0,});

});

    $(".brand_search_text").blur(function () {
        $(".brand_search").animate({
            width:'120px',});
        $("#txt_search").animate({
            width:'120px',});

        $(".brand_search_focus_bg").animate({
            opacity:0,});
        $(".brand_search_base_bg").animate({
            opacity:1,});

    });

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

$(".l_header_link_management").hover(function () {
    $(".l_header_bg_image").css("background-position","center bottom");
},function () {
    $(".l_header_bg_image").css("background-position","center top");
});

    //下来导航
$(".main-nav_area").hover(function () {
    $(".down_nav").fadeIn(1500);
});


    $(".main-nav_news,.down_nav_1").hover(function () {
        $(".down_nav_1").css("background","#4d5154");
        $(".main-nav_news").css("background","#4d5154");
    },function () {
        $(".down_nav_1").css("background","#484c4f");
        $(".main-nav_news").css("background","#1b1b1b");
    });


    $(".main-nav_promotion,.down_nav_2").hover(function () {
        $(".down_nav_2").css("background","#4d5154");
        $(".main-nav_promotion").css("background","#4d5154");
    },function () {
        $(".down_nav_2").css("background","#484c4f");
        $(".main-nav_promotion").css("background","#1b1b1b");
    });


    $(".main-nav_playguide,.down_nav_3").hover(function () {
        $(".down_nav_3").css("background","#4d5154");
        $(".main-nav_playguide").css("background","#4d5154");
    },function () {
        $(".down_nav_3").css("background","#484c4f");
        $(".main-nav_playguide").css("background","#1b1b1b");
    });

    $(".main-nav_community,.down_nav_4").hover(function () {
        $(".down_nav_4").css("background","#4d5154");
        $(".main-nav_community").css("background","#4d5154");
    },function () {
        $(".down_nav_4").css("background","#484c4f");
        $(".main-nav_community").css("background","#1b1b1b");
    });

    $(".main-nav_ranking,.down_nav_5").hover(function () {
        $(".down_nav_5").css("background","#4d5154");
        $(".main-nav_ranking").css("background","#4d5154");
    },function () {
        $(".down_nav_5").css("background","#484c4f");
        $(".main-nav_ranking").css("background","#1b1b1b");
    });

    $(".main-nav_help,.down_nav_6").hover(function () {
        $(".down_nav_6").css("background","#4d5154");
        $(".main-nav_help").css("background","#4d5154");
    },function () {
        $(".down_nav_6").css("background","#484c4f");
        $(".main-nav_help").css("background","#1b1b1b");
    });

    $(".allnav").mouseleave(function () {
        $(".down_nav").fadeOut(500);
    });

    //选项卡
    $(".news_tab--newrelease").click(function () {
        $(".news_tab img").css("margin-top","0px");
        $(".news_tab--newrelease img").css("margin-top","-88px");
        $("#toptabchanger_newsarea").children(".toptabchanger_newsbox").css("display","none");
        $("#toptabchanger_newsarea").children().eq(0).css("display","block");
        //两个大div
        $("#toptabchanger_newsarea").css("display","block");
        $("#toptabchanger_topicsarea").css("display","block");

    });
    $(".news_tab--topics").click(function () {
        $(".news_tab img").css("margin-top","0px");
        $(".news_tab--topics img").css("margin-top","-88px");
        //两个大div
        $("#toptabchanger_newsarea").css("display","none");
        $("#toptabchanger_topicsarea").css("display","block");

    });

    $(".news_tab--news").click(function () {
        $(".news_tab img").css("margin-top","0px");
        $(".news_tab--news img").css("margin-top","-88px");
        $("#toptabchanger_newsarea").children(".toptabchanger_newsbox").css("display","none");
        $("#toptabchanger_newsarea").children().eq(1).css("display","block");
        //linkbutton
        $(".bt_backnumber").css("display","block");
        $(".bt_topics_list").css("display","none");
        //两个大div
        $("#toptabchanger_newsarea").css("display","block");
        $("#toptabchanger_topicsarea").css("display","none");

    });

    $(".news_tab--maintenance").click(function () {
        $(".news_tab img").css("margin-top","0px");
        $(".news_tab--maintenance img").css("margin-top","-88px");
        $("#toptabchanger_newsarea").children(".toptabchanger_newsbox").css("display","none");
        $("#toptabchanger_newsarea").children().eq(2).css("display","block");
        //linkbutton
        $(".bt_backnumber").css("display","block");
        $(".bt_topics_list").css("display","none");
        //两个大div
        $("#toptabchanger_newsarea").css("display","block");
        $("#toptabchanger_topicsarea").css("display","none");

    });

    $(".news_tab--update").click(function () {
        $(".news_tab img").css("margin-top","0px");
        $(".news_tab--update img").css("margin-top","-88px");
        $("#toptabchanger_newsarea").children(".toptabchanger_newsbox").css("display","none");
        $("#toptabchanger_newsarea").children().eq(3).css("display","block");
        //linkbutton
        $(".bt_backnumber").css("display","block");
        $(".bt_topics_list").css("display","none");
        //两个大div
        $("#toptabchanger_newsarea").css("display","block");
        $("#toptabchanger_topicsarea").css("display","none");

    });

    $(".news_tab--obstacle").click(function () {
        $(".news_tab img").css("margin-top","0px");
        $(".news_tab--obstacle img").css("margin-top","-88px");
        $("#toptabchanger_newsarea").children(".toptabchanger_newsbox").css("display","none");
        $("#toptabchanger_newsarea").children().eq(4).css("display","block");
        //linkbutton
        $(".bt_backnumber").css("display","block");
        $(".bt_topics_list").css("display","none");
        //两个大div
        $("#toptabchanger_newsarea").css("display","block");
        $("#toptabchanger_topicsarea").css("display","none");

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

