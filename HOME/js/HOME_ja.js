/**
 * Created by toya on 2017/1/2.
 */
$(function () {
//遮罩层
$("#v1").click(function(){
	$(".reveal-modal-bg").css("display","block");
	$(".vid1").css("display","block");
	$('.vv1').trigger('play');
	});
$("#v2").click(function(){
	$(".reveal-modal-bg").css("display","block");
	$(".vid2").css("display","block");
	$('.vv2').trigger('play');
	});
$(".reveal-modal-bg").click(function(){
	$(this).css("display","none");
	$(".vid1").css("display","none");
	$(".vid2").css("display","none");
	$('video').trigger('pause');
	});
	
	
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


    //黄色按钮
$(".bt_free").hover(function () {
        $(".on1").fadeIn(250);
    },function () {
        $(".on1").fadeOut(250);
    });

    $(".bt_now").hover(function () {
        $(".on2").fadeIn(250);
    },function () {
        $(".on2").fadeOut(250);
    });

    $(".btn_winner").hover(function () {
        $(".pc_view4").fadeIn(250);
    },function () {
        $(".pc_view4").fadeOut(250);
    });


    $(".list_list").rotate({
        bind: {
            mouseover: function() {
                $(this).rotate({
                    animateTo: 180
                });
            },
            mouseout: function() {
                $(this).rotate({
                    animateTo: 0
                });
            }
        }
    });

//third
    $(".t1_h4,.t1_p").hover(function () {
        $(".t1on").fadeIn(500);
        $(".bg_story_01").fadeIn(600);
    },function () {
        $(".t1on").fadeOut(500);
    });

    $(".t1_a").hover(function () {
        $(".bt_movie_arr_on").fadeIn(400);
    },function () {
        $(".bt_movie_arr_on").fadeOut(400);
    });

    $(".t2_h4,.t2_p").hover(function () {
        $(".t2on").fadeIn(500);
        $(".bg_story_01").fadeOut(600);
    },function () {
        $(".t2on").fadeOut(500);
    });

    $(".t2_a").hover(function () {
        $(".bt_movie_hw_on").fadeIn(400);
    },function () {
        $(".bt_movie_hw_on").fadeOut(400);
    });


    $(".tex_battle1").hover(function () {
        $(".bg_battle1").fadeIn(500);
        $(".bg_battle2").fadeOut(500);
        $(".bg_battle3").fadeOut(500);
        $(".txt_battle_01").fadeIn(500);
        $(".txt_battle_02").fadeOut(500);
        $(".txt_battle_03").fadeOut(500);
    });
    $(".tex_battle2").hover(function () {
        $(".bg_battle2").fadeIn(500);
        $(".bg_battle3").fadeOut(500);
        $(".txt_battle_02").fadeIn(500);
        $(".txt_battle_01").fadeOut(500);
        $(".txt_battle_03").fadeOut(500);
    });
    $(".tex_battle3").hover(function () {
        $(".bg_battle3").fadeIn(500);
        $(".bg_battle2").fadeOut(500);
        $(".txt_battle_03").fadeIn(500);
        $(".txt_battle_02").fadeOut(500);
        $(".txt_battle_01").fadeOut(500);
    });


    $(".other_content_bt_free_trial").hover(function () {
        $(".other_img_free_on").fadeIn(400);
    },function () {
        $(".other_img_free_on").fadeOut(400);
    });

    $(".other_content_bt_buy_now").hover(function () {
        $(".other_img_buy_on").fadeIn(400);
    },function () {
        $(".other_img_buy_on").fadeOut(400);
    });


    //3D旋转
    $(function(){
        Carousel.init($("#carousel"));
        $("#carousel").init();
    });


 $(window).scroll(function () {
	    if($(window).scrollTop() >= 70)
		{ 
		   $("#btn_arae").addClass("fix");
		   if($(window).scrollTop() >800){$('#btn_arae').fadeOut();}
		    else {$("#btn_arae").fadeIn();}
		}
		 if ($(window).scrollTop() >= 50) {
            $(".page-top").fadeIn();
        }
        else {
            $(".page-top").fadeOut();
        }
      
    });
	
		$(".page-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);});



});

function ScrollTop() {
    var btn_arae=document.getElementById("btn_arae");
    var x=document.body.scrollTop;

    if(x<70){
		btn_arae.className="btn_arae";
      
            //滚动条向上滚显示
            //var p=0,t=0;
            // $(window).scroll(function(e){
            //    p = $(this).scrollTop();
            //    if(t>p){
            //        btn_arae.style.display="block";
            //    }

            //    setTimeout(function(){t = p;},0);
            //});
			}
}
setInterval("ScrollTop()","100");
