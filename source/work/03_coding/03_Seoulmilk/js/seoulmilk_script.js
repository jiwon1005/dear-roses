// --------------------------------------------- GNB
$(function () {
    $(".gnb ul li").on({
        "mouseover focus": function () {
            $(this).children(".lnb_wrap, .gnb_wrap div").stop().show(0);
        },
        "mouseout blur": function () {
            $(this).children(".lnb_wrap, .gnb_wrap div").stop().hide(0);
        }
    })
});



// --------------------------------------------- Event Slide
$(function () {

    var i = 0;

    $(".event_slide_list li:gt(0)").hide();

    $(".event_slide_page").children("span").text(i + 1);
    function autoMove() {
        var next = (i + 1) % 8;

        $(".event_slide_list li").eq(i).fadeOut(1500);
        $(".event_slide_list li").eq(next).fadeIn(1500);

        i = next;
        $(".event_slide_page").children("span").text(i + 1);
    }

    function autoPlay() {
        auto = setInterval(function () {
            autoMove();
        }, 3000);

        function autoPlayStop() {
            $('.event_wrap').mouseenter(function () {
                clearInterval(auto);
            })
        }
        autoPlayStop();

        function autoRestart() {
            $('.event_wrap').mouseleave(function () {
                auto = setInterval(function () {
                    autoMove();
                }, 3000);
            }
            );
        }
        autoRestart();
    }
    autoPlay();



    $('.event_next_wrap').click(function () {
        autoMove();
    });

    $('.event_prev_wrap').click(function () {

        var pre = (i - next) % 8;

        $(".event_slide_list li").eq(i).fadeOut(1500);
        $(".event_slide_list li").eq(pre).fadeIn(1500);
        $(".event_slide_page").children("span").text(i);

        i = pre;

    });

});



// --------------------------------------------- Media Slide
function init() {
    $(".media_slide_wrap ul li:nth-child(13),.media_slide_wrap ul li:nth-child(14),.media_slide_wrap ul li:nth-child(15)").prependTo(".media_slide_wrap ul");
    $(".media_slide_wrap ul").css("margin-left", "-930" + "px");
}

function moveRight() {
    $(".media_slide_wrap ul").animate({ marginLeft: -1860 + "px" }, 1000, function () {
        $(".media_slide_wrap ul li:nth-child(1),.media_slide_wrap ul li:nth-child(2),.media_slide_wrap ul li:nth-child(3)").appendTo(".media_slide_wrap ul");
        $(".media_slide_wrap ul").css("margin-left", "-930" + "px");
    })
}

function moveLeft() {
    $(".media_slide_wrap ul").animate({ marginLeft: 0 }, 1000, function () {
        $(".media_slide_wrap ul li:nth-child(13),.media_slide_wrap ul li:nth-child(14),.media_slide_wrap ul li:nth-child(15)").prependTo(".media_slide_wrap ul");
        $(".media_slide_wrap ul").css("margin-left", "-930" + "px");
    })
}


$(function () {
    init();

    $(".media_slide_next").click(function () {
        moveRight();
    })
    $(".media_slide_prev").click(function () {
        moveLeft();
    })
});