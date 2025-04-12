// ---------------- GNB ----------------
$(function () {
    $(".gnb").on({
        "mouseover focus": function () {
            $(this).children(".lnb_wrap").stop().show(0);
        },
        "mouseout blur": function () {
            $(this).children(".lnb_wrap").stop().hide(0);
        }
    })
});



// ---------------- GNB (Ver. Mobile) ----------------
$(function () {
    $(".gnb_m").on({
        "mouseover focus": function () {
            $(this).children(".lnb_wrap_m").stop().show(0);
        },
        "mouseout blur": function () {
            $(this).children(".lnb_wrap_m").stop().hide(0);
        }
    })
});

// Modal Popup (Ver. Mobile LNB)
$(function () {
    $(".header_m_menu").click(function () {
        $(".popup_m").show();
        $('body').css('overflow', 'hidden');
    });
    $(".gnb_t_m li:last-child").click(function () {
        $(".popup_m").hide();
        $('body').css('overflow-y', 'auto');
    });
    $(".popup_bg").on('scroll mousewheel', function(e) {
        e.preventDefault();
    });
});



// ---------------- Main Slide ----------------
$(function(){
    var num = 0;
    var wid = $(".slide_box").width();

    function move() {  
        $(".slide_list").stop().animate({marginLeft : -wid * num},1000);
        $(".slide_indi ul li").removeClass("on");
        $(".slide_indi ul li").eq(num).addClass("on");
    };
    
    function indi(){
        $(".slide_indi ul li").click(function(){
            num = $(this).index();
            move();
        })
    }

    function autoMove() {
        num++;
        if (num >= $(".slide_list li").length) {
            num = 0;
        }
        
        $(".slide_list").stop().animate({marginLeft : -wid * num}, 1000, function(){
            if (num === 0) {
                $(".slide_list").css("margin-left", "0px");
            }
        });

        $(".slide_indi ul li").removeClass("on");
        $(".slide_indi ul li").eq(num).addClass("on");
    };

    indi();

    function autoSlide(){
        var auto = setInterval(function(){
            autoMove();
        }, 4000);

        $(".ctr_btn").click(function(){
            if($(".ctr_btn").hasClass("stop")){
                $(".ctr_btn").removeClass("stop");
                $(".ctr_btn").addClass("play");
                clearInterval(auto);

            }else if($(".ctr_btn").hasClass("play")){
                $(".ctr_btn").removeClass("play");
                $(".ctr_btn").addClass("stop");

                auto = setInterval(function(){
                    autoSlide();
                }, 4000);
            }
        });

        $(".prev").click(function(){
            num--;
            if (num < 0) {
                num = $(".slide_list li").length - 1;
            }
            move();
        });

        $(".next").click(function(){
            num++;
            if (num >= $(".slide_list li").length) {
                num = 0;
            }
            move();
        });
    };

    autoSlide();

    $(window).resize(function() {
        wid = $(".slide_box").width();
        move();
      });
});



// ---------------- Tab Menu ----------------
$(function(){
    $(".tab_menu1 > li, .tab_menu2 > li, .tab_menu3 > li, .tab_menu4 > li").click(function(){
        $(this).addClass("active")
        .siblings().removeClass("active");
    });
});



// ---------------- notice_board ----------------
$(function() {
    var num = 0;
    var auto;
  
    function slideMove() {
      var $slider = $(".notice_board_wrap");
      var current = $slider.children("span.noti_active");
      var post;
  
      if (num === -1) {
        num = $slider.children("span").length - 1;
      } else if (num === $slider.children("span").length) {
        num = 0;
      }
  
      post = $slider.children("span").eq(num);
  
      current.removeClass("noti_active");
      post.addClass("noti_active");
      pageNum();
    }
  
    function startAutoSlide() {
      auto = setInterval(function() {
        num++;
        slideMove();
      }, 3000);
    }
  
    function stopAutoSlide() {
      clearInterval(auto);
    }
  
    startAutoSlide();
  
    $(".noti_auto").click(function() {
      if ($(".noti_auto_btn").hasClass("noti_stop")) {
        $(".noti_auto > .noti_auto_btn").removeClass("noti_stop");
        $(".noti_auto > .noti_auto_btn").addClass("noti_play");
        stopAutoSlide();

      } else if ($(".noti_auto_btn").hasClass("noti_play")) {
        $(".noti_auto > .noti_auto_btn").removeClass("noti_play");
        $(".noti_auto > .noti_auto_btn").addClass("noti_stop");
        startAutoSlide();
      }
    });
  
    $(".noti_prev").click(function() {
      num--;
      slideMove();
      stopAutoSlide();
      startAutoSlide();
    });
  
    $(".noti_next").click(function() {
      num++;
      slideMove();
      stopAutoSlide();
      startAutoSlide();
    });
  
    function pageNum() {
      var totalSlideNum = $(".notice_board_wrap > span").length;
      $(".total").text(totalSlideNum);
      var currentSlideNum = $(".notice_board_wrap > span.noti_active").attr("data-slide-num");
      $(".page_num").text(currentSlideNum);
    }
  
    pageNum();
  });



// ---------------- Scroll Up ----------------
$(function(){
    $(".scroll_top, .scroll_top_m").click(function(){
        $("html, body").animate({scrollTop:0},500);
    })
});
