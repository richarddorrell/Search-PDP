
var overlayHeight = $(window).height() - $("header.mainheader").height();
var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight();
$("div.filters-overlay").css("height", overlayHeight);
$("div.filters-inner").css("height", filtersInnerHeight);
$("div.pdp-overlay").css("height", overlayHeight);
$("div.pdp-inner").css("height", overlayHeight);


$("div.filters-overlay").hide();
$("div.filters-overlay").css("top", $(window).height());

$("#hidefilters").click(function () {
    $("div.filters-overlay").hide();
    $("div.filters-overlay").css("top", $(window).height());
    $("body").css("overflow", "scroll");
});

$("#showfilters").click(function () {
    $("div.filters-overlay").show();
    $("div.filters-overlay").css("top", $("header.mainheader").height());
    $("body").css("overflow", "hidden");
});

/* SHOW PDP */
$("div.pdp-overlay").css("top", $("header.mainheader").height());

$("#hidepdp").click(function () {
    if ($("div.pdp-inner").hasClass("pdp-in")) {
        $("div.pdp-inner").removeClass("pdp-in");
        $("div.pdp-inner").addClass("pdp-out");
        $("body").css("overflow", "scroll");
        $("div.pdp-overlay").hide();
    }
});

$("#showpdp").click(function () {
    $("div.pdp-overlay").show();
    if ($("div.pdp-inner").hasClass("pdp-out")) {
        $("div.pdp-inner").removeClass("pdp-out");
        $("div.pdp-inner").addClass("pdp-in");
        $("body").css("overflow", "hidden");
        $("div.pdp-inner").load("pdp.html #pdpcontent");
        $.getScript("scripts/overlay.js");
        $.getScript("scripts/craftyslide.js");
    }
          
});