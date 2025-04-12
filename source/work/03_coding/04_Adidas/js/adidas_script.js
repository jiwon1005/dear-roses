// ------------------------------- GNB Hide ---------------------------------
$(function(){
  var prevScroll = 0;

  $(window).scroll(function(){
    var currentScroll = $(window).scrollTop();

    if (currentScroll > prevScroll) {
      $("header").slideUp(500);
    } else {
      $("header").slideDown(500);
    }

    prevScroll = currentScroll;
  });
});



// ------------------------------- Header Slide ---------------------------------
$(function () {
  var i = 0;

  $(".header_wrapper li:gt(0)").hide();

  setInterval(function () {
    var next = (i + 1) % 3;

    $(".header_wrapper > ul > li").eq(i).fadeOut();
    $(".header_wrapper > ul > li").eq(next).fadeIn();

    i = next;
  }, 5000)
});



// ------------------------------- lnb ---------------------------------
$(function () {
  $(".gnb_wrap ul li").on({
    "mouseover focus": function () {
      $(this).children(".lnb_wrap").stop().show(0);
    },
    "mouseout blur": function () {
      $(this).children(".lnb_wrap").stop().hide(0);
    }
  })
});



// ------------------------------- LNB (Ver. Mobile) ---------------------------------
$(document).ready(function () {
  $('.menu_btn').click(function () {
    $('.lnb_m').animate({ width: "toggle" }, 400, function () {
      $('body').css('overflow-x', 'hidden');
      $('body').css('overflow-y', 'hidden');
    });
  });

  $(window).resize(function () {
    if ($(window).width() >= 960 && $('.lnb_m').is(':visible')) {
      $('.lnb_m').hide();
      $('body').css('overflow', 'scroll');
    }
  });

  $('.lnb_m_close').click(function () {
    $('.lnb_m').animate({ width: "toggle" }, 400, function () {
      $('body').css('overflow', 'scroll');
    });
  });
});



// ------------------------------- Main Slide ---------------------------------
$(function () {
  var i = 0;
  var intervalId;

  $(".main_slide li:gt(0)").hide();

  function startSlideShow() {
    intervalId = setInterval(function () {
      var next = (i + 1) % 5;

      $(".main_slide > ul > li").eq(i).hide();
      $(".main_slide > ul > li").eq(next).show();

      i = next;
    }, 1500);
  }

  function stopSlideShow() {
    clearInterval(intervalId);
  }

  $(".stop_btn").on("click", function () {
    $(this).removeClass("active");
    $(".play_btn").addClass("active");
    stopSlideShow();
  });

  $(".play_btn").on("click", function () {
    $(this).removeClass("active");
    $(".stop_btn").addClass("active");
    startSlideShow();
  });

  startSlideShow();
});



// ------------------------------- Product Slide ---------------------------------
// Wishlist On & Off
$(function(){
  $(".prdt_ws").on("click", function() {
    $(this).toggleClass("on");
  });
});



// ------------------------------- Bottom GNB menu -------------------------------

$(function(){
  $(".btm_gnb_tit").on("click", function(){
    var $btmLnb = $(this).find(".btm_lnb");

    if ($btmLnb.is(":visible")) {
      $btmLnb.stop().slideUp(500);
    } else {
      $(".btm_lnb").not($btmLnb).stop().slideUp(500);
      $btmLnb.stop().slideDown(500);
    }
  });
});



// ------------------------------- Scroll Up -------------------------------
$(function(){
  $(".scroll_top").click(function(){
      $("html, body").animate({scrollTop:0},1000);
  })
});



  // ------------------------------- a tag Deactivate ---------------------------------
// $(document).ready(function() {
//   $('a').on("click", function(e) {
//       e.preventDefault();
//   });
// });



