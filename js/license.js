// License More - Modal Popup

$(function () {
    $(".lic-more").click(function () {
        $(".popup-bg, .license-popup").show();
    });

    $(".lic-close, .popup-bg").click(function () {
        $(".popup-bg, .license-popup").hide();
    });
    $(".popup-bg").on('scroll mousewheel', function(e) {
        e.preventDefault();
    });
});
