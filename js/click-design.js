// Filter
$(function() {
    $(".works-filter > li > a").click(function() {

        $(".filter-ac").removeClass("filter-ac");
        

        $(this).parent().addClass("filter-ac");
        
        var filter = $(this).attr("data-filter");

        if (filter == "all") {
            $(".work-box").show();
        } else {
            $(".work-box").hide().filter("." + filter).show();
        }
    });
});