// GNB
$(function () {
    $(".gnb ul li").on({
        "mouseover focus": function () {
            $(this).children(".lnb").stop().show(100);
        },
        "mouseout blur": function () {
            $(this).children(".lnb").stop().hide(100);
        }
    })
});



// Menu - Modal Popup
$(function () {
    $(".popup_icon").click(function () {
        $(".popup_bg_menu, .popup_wrap").show();
    });
    $(".popup_close, .popup_bg_menu").click(function () {
        $(".popup_bg_menu, .popup_wrap").hide();
    });
    $(".popup_bg_menu").on('scroll mousewheel', function(e) {
        e.preventDefault();
    });
});



// Search - Modal Popup
$(function () {
    $(".gnb_search").click(function () {
        $(".popup_bg_search, .search_bg, .search_wrap").show();
    });

    $(".search_popup_close, .popup_bg_search").click(function () {
        $(".popup_bg_search, .search_bg, .search_wrap").hide();
    });
});



// Scroll Fix
$('#header').on('scroll mousewheel', function (e) {
    e.preventDefault();
});



// Main Slide
$(function () {
    $(".main_list ul li:gt(0)").hide();
    var i = 0;

    // Auto Slide
    function autoPlay() {
        auto = setInterval(function () {
            var next = (i + 1) % 6;

            $(".main_list ul li").eq(i).fadeOut(1500);
            $(".main_list ul li").eq(next).fadeIn(1500);

            i = next;
        }, 4000);

        function autoPlayStop() {
            $('.main_wrap').mouseover(function () {
                clearInterval(auto);
            })
        }
        autoPlayStop();

        function autoRestart() {
            $('.main_wrap').mouseleave(function () {
                auto = setInterval(function () {
                    var next = (i + 1) % 6;

                    $(".main_list ul li").eq(i).fadeOut(1500);
                    $(".main_list ul li").eq(next).fadeIn(1500);

                    i = next;
                }, 4000);
            }
            );
        }
        autoRestart();
    }
    autoPlay();

    // Button Control
    $(function () {
        $('.slide-next').click(function () {
            var next = (i + 1) % 6;

            $(".main_list ul li").eq(i).fadeOut(1500);
            $(".main_list ul li").eq(next).fadeIn(1500);

            i = next;
        })
        $('.slide-prev').click(function () {
            var pre = (i - 1) % 6;

            $(".main_list ul li").eq(i).fadeOut(1500);
            $(".main_list ul li").eq(pre).fadeIn(1500);

            i = pre;
        })
    });
});


// Scroll Top
$(function(){
    $(".scrollup_btn").click(function(){
        $("html, body").animate({scrollTop:0},1000);
    })
});
// console.log($(window).scrollTop())


// Scroll Top Button - Hide
$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll > 120){
            $(".scrollup_btn").show()
        } else {
            $(".scrollup_btn").hide()
        }
    })
});