/**
 * Created by toya on 2017/1/10.
 */
$(function () {
    //视觉转动
    $(".win").click(function () {
        $("#ffxivft_page0").animate({left:"-100%"},800);

        $("#ffxivft_page1").animate({left:"0"},800);
        $("#contentsWrap").css("height","1259px");
    });
    $(".change").click(function () {
        $("#ffxivft_page0").animate({left:"0"},800);
        $("#ffxivft_page1").animate({left:"100%"},800);
        $("#contentsWrap").css("height","1323px");
    });
    
    //分页滚动
    $(".menu000").click(function () {
        $(".container").animate({left:"0"},600);
        $("#contentsWrap").css("height","1259px");
        $(".menu000").css("background-position","0 -85px");
        $(".menu111").css("background-position","-152px -25px").hover(function () {
            $(this).css("background-position","-152px -85px");

        },function () {
            $(this).css("background-position","-152px -25px");
        });
        $(".menu222").css("background-position","-305px -25px").hover(function () {
            $(this).css("background-position","-305px -85px");

        },function () {
            $(this).css("background-position","-305px -25px");
        });
        $(".menu333").css("background-position","-458px -25px").hover(function () {
            $(this).css("background-position","-458px -85px");

        },function () {
            $(this).css("background-position","-458px -25px");
        });
    });

    $(".menu111").click(function () {
        $(".container").animate({left:"-610px"},600);
        $("#contentsWrap").css("height","1359px");
        $(".menu000").css("background-position","0 -25px").hover(function () {
            $(this).css("background-position","0 -85px");

        },function () {
            $(this).css("background-position","0 -25px");
        });
        $(".menu111").css("background-position","-152px -85px");
        $(".menu222").css("background-position","-305px -25px").hover(function () {
            $(this).css("background-position","-305px -85px");

        },function () {
            $(this).css("background-position","-305px -25px");
        });
        $(".menu333").css("background-position","-458px -25px").hover(function () {
            $(this).css("background-position","-458px -85px");

        },function () {
            $(this).css("background-position","-458px -25px");
        });
    });

    $(".menu222").click(function () {
        $(".container").animate({left:"-1220px"},600);
        $("#contentsWrap").css("height","1693px");
        $(".menu000").css("background-position","0 -25px").hover(function () {
            $(this).css("background-position","0 -85px");

        },function () {
            $(this).css("background-position","0 -25px");
        });
        $(".menu111").css("background-position","-152px -25px").hover(function () {
            $(this).css("background-position","-152px -85px");

        },function () {
            $(this).css("background-position","-152px -25px");
        });
        $(".menu222").css("background-position","-305px -85px");
        $(".menu333").css("background-position","-458px -25px").hover(function () {
            $(this).css("background-position","-458px -85px");

        },function () {
            $(this).css("background-position","-458px -25px");
        });
    });

    $(".menu333").click(function () {
        $(".container").animate({left:"-1830px"},600);
        $("#contentsWrap").css("height","1144px");
        $(".menu000").css("background-position","0 -25px").hover(function () {
            $(this).css("background-position","0 -85px");

        },function () {
            $(this).css("background-position","0 -25px");
        });
        $(".menu111").css("background-position","-152px -25px").hover(function () {
            $(this).css("background-position","-152px -85px");

        },function () {
            $(this).css("background-position","-152px -25px");
        });
        $(".menu222").css("background-position","-305px -25px").hover(function () {
            $(this).css("background-position","-305px -85px");

        },function () {
            $(this).css("background-position","-305px -25px");
        });
        $(".menu333").css("background-position","-458px -85px");
    });

    //PS4
    $(".menu1").click(function () {
        $(".text2").css("display","none");
        $(".text0").css("display","block");
        $(this).css("background-position","0 -118px");
        $(".menu3").css("background-position","0 0");
    });

    $(".menu3").click(function () {
        $(".text2").css("display","block");
        $(".text0").css("display","none");
        $(this).css("background-position","0 -118px");
        $(".menu1").css("background-position","0 0");
    });

//返回顶部
    $("#ffxivft_totop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);});

});
