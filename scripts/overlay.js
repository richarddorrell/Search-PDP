
var overlayHeight = $(window).height() - $("header.mainheader").height();
var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight();
$("div.filters-overlay").css("height",overlayHeight);
$("div.filters-inner").css("height",filtersInnerHeight);
$("div.pdp-overlay").css("height",overlayHeight);
$("div.pdp-inner").css("height",overlayHeight);
$("div.pdp-inner").css("width",$(window).width());
$("div.pdp-overlay").css("width",$(window).width());


$("div.filters-overlay").hide();
$("div.filters-overlay").css("top",$(window).height());

$("#hidefilters").click(function(){
    $("div.filters-overlay").hide();
    $("div.filters-overlay").css("top",$(window).height());
    $("body").css("overflow","scroll");
});

$("#showfilters").click(function(){
    $("div.filters-overlay").show();            
    $("div.filters-overlay").css("top",$("header.mainheader").height());
    $("body").css("overflow","hidden");
});

/* SHOW PDP */
$("div.pdp-overlay").hide();
$("div.pdp-inner").addClass("pdp-out");
$("div.pdp-overlay").css("top",$("header.mainheader").height());

$("#hidepdp").click(function(){
    $("div.pdp-inner").removeClass("pdp-in");
    $("div.pdp-inner").addClass("pdp-out");
    $("body").css("overflow","scroll");
    $("div.pdp-overlay").hide();
});

$("#showpdp").click(function(){
    $("div.pdp-overlay").show();
    $("div.pdp-inner").removeClass("pdp-out");
    $("div.pdp-inner").addClass("pdp-in");
    $("body").css("overflow","hidden");
    $.get("pdp.html");
});