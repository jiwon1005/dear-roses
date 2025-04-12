// Hide Logo
window.addEventListener("scroll", function() {
    var h1Element = document.querySelector("header");
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        h1Element.style.top = "-140px";
    } else {
        h1Element.style.top = "0";
    }
});



// Scroll-Top & Back
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.querySelector(".scroll-top");
    $(".scroll-top").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    $(".back").click(function () {
        window.history.back();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});