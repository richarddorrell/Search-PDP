
var overlayHeight = $(window).height() - $("header.mainheader").height();
var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight();
$("div.filters-overlay").css("height", overlayHeight);
$("div.filters-inner").css("height", filtersInnerHeight);
$("div.pdp-overlay").css("height", overlayHeight);
$("div.pdp-inner").css("height", overlayHeight);

$(window).resize(function () {
    var overlayHeight = $(window).height() - $("header.mainheader").height();
    var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight();
    $("div.filters-overlay").css("height", overlayHeight);
    $("div.filters-inner").css("height", filtersInnerHeight);
    $("div.pdp-overlay").css("height", overlayHeight);
    $("div.pdp-inner").css("height", overlayHeight);
});

$("div.filters-overlay").css("top", $("header.mainheader").height());

$("#hidefilters").click(function () {
    if ($("div.filters-inner").hasClass("filters-in")) {
        $("div.filters-inner").removeClass("filters-in");
        $("div.filters-inner").addClass("filters-out");
        $("body").css("overflow", "scroll");
        $("div.filters-overlay").delay(300).hide(0);
    }
});

$("#showfilters").click(function () {
    $("div.filters-overlay").show();
    if ($("div.filters-inner").hasClass("filters-out")) {
        $("div.filters-inner").removeClass("filters-out");
        $("div.filters-inner").addClass("filters-in");
        $("body").css("overflow", "hidden");
    }
});

/* SHOW PDP */
$("div.pdp-overlay").css("top", $("header.mainheader").height());
$("div.pdp-overlay").css("width", $(window).width());

$("#hidepdp").click(function () {
    if ($("div.pdp-inner").hasClass("pdp-in")) {
        $("div.pdp-inner").removeClass("pdp-in");
        $("div.pdp-inner").addClass("pdp-out");
        $("body").css("overflow", "scroll");
        $("div.pdp-overlay").delay(300).hide(0);
    }
});

$("#showpdp").click(function () {
    $("div.pdp-overlay").show();
    if ($("div.pdp-inner").hasClass("pdp-out")) {
        $("div.pdp-inner").removeClass("pdp-out");
        $("div.pdp-inner").addClass("pdp-in");
        $("body").css("overflow", "hidden");
        $("div.pdp-inner").load("pdp.html #pdpcontent", function () {
            $.getScript('scripts/overlay.js', function() {
                $.getScript('scripts/swiper.jquery.js', function() {
                   var imgsize = $(window).width() - 80;
                   $("#swiperscript").replaceWith('<style>.swiper-container { width: ' + imgsize +'px; height: ' + (imgsize + 50) +'px; } </style> <script> var swiper = new Swiper(".swiper-container", { pagination: ".swiper-pagination", paginationClickable: true }); </script>');
               });
            });
        }); 
    }
          
});