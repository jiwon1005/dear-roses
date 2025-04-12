// Fix
$(function () {
    $(".fix-insta").on(
        "click", function () {
            window.open("http://www.instagram.com", "instagram",
                "width=500,height=500")
        }
    )
});


// GNB
$(function () {
    $("#gnb > ul > li").on({
        "mouseover focus": function () {
            $(".sub-menu").show();
            $("header").addClass("menu-bg");
        },
        "mouseout blur": function () {
            $(".sub-menu").hide();
            $("header").removeClass("menu-bg");
        }
    })
});


// Main Slide
$(function(){
    var num = 0;
    var wid = $(".slide-list ul li").width();

    function move() {  
        $(".slide-list ul").stop().animate({marginLeft : -wid * num},1000);
        $(".slide-indicator ul li").removeClass("on");
        $(".slide-indicator ul li").eq(num).addClass("on");
    };
    function indi(){
        $(".slide-indicator ul li").click(function(){
            num = $(this).index();
            move();
        })
    }
     function autoMove() {  
        $(".slide-list ul").stop().animate({marginLeft : -wid},1000,function(){
            $(".slide-list ul li:first-child").appendTo(".slide-list ul");
            $(".slide-list ul").css("margin-left","0"+"px");
        })
        
        $(".slide-indicator ul li").removeClass("on");
        $(".slide-indicator ul li").eq(num).addClass("on");
    };

    indi();

    // Auto Play
    function autoSlide(){
        auto = setInterval(function(){
            if(num < 2){
                num++;
            }else{
                num = 0;
            }
            autoMove();
            
        },4000)

         // Auto Play Stop
        function autoPlayStop() {
            $("main").mouseenter(function() {
                clearInterval(auto);
            });
        }
        
        autoPlayStop();

        // Restart
        function autoPlayRestart() {
            $("main").mouseleave(function() {
            auto = setInterval(function() {
                if(num < 2){
                    num++;
                }else{
                    num = 0;
                }
                autoMove();
            }, 4000);
            });
        }

        autoPlayRestart();

    };

    autoSlide();
});


// MD Slide
$(function(){
    function init(){
    $(".md-product-wrap ul li:last-child").prependTo(".md-product-wrap ul");
    };

    // Move Right
    function moveRight() {  
    $(".md-product-wrap  ul").animate({marginLeft: -508 + "px"},500,function(){
        $(".md-product-wrap  ul li:first-child").appendTo(".md-product-wrap  ul");
        $(".md-product-wrap  ul").css("margin-left", "-254" + "px");
    })
    };  

    //Move Left
    function moveLeft(){
    $(".md-product-wrap  ul").animate({marginLeft: 0},500,function(){
        $(".md-product-wrap  ul li:last-child").prependTo(".md-product-wrap  ul");
        $(".md-product-wrap  ul").css("margin-left", "-254" + "px");
    })
    };

//실행
$(function(){

    init();
    
    // Right Button
    $(".next").click(function(){
    moveRight();
    });
    
    // Left Button
    $(".prev").click(function(){
    moveLeft();
    });

});
})



// Random Cat - Hover
$(function () {
    $(".contents-left>ul>li").hover(function () {
        var randomNum = Math.floor(Math.random() * 5);
        var randomCat = new Array();

        randomCat[0] = '<img src="./source/image/03_Container/01_Contents/Hover/cat1.png" class="hv">';
        randomCat[1] = '<img src="./source/image/03_Container/01_Contents/Hover/cat2.png" class="hv">';
        randomCat[2] = '<img src="./source/image/03_Container/01_Contents/Hover/cat3.png" class="hv">';
        randomCat[3] = '<img src="./source/image/03_Container/01_Contents/Hover/cat4.png" class="hv">';
        randomCat[4] = '<img src="./source/image/03_Container/01_Contents/Hover/cat5.png" class="hv">';

        $(this).find(".cat").append(randomCat[randomNum]);
    }, function () {
        $('.hv').remove();
    })
});



// Top Button
$(function () {
    $(".btn-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })
})