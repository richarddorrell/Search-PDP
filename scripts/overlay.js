$(document).ready(function () {
    
    var overlayHeight = $(window).height() - $("header.mainheader").height();
    var topoffset = $(".pdpnav").outerHeight();
    var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight() - $(".refinenav").outerHeight();
    var windowwidth = $(window).width();
    var imgsize = $(window).width() - 80;
    var imgsizetab = imgsize - $(".pdp-right").width();
    var carouselmaxsize = overlayHeight - topoffset - $(".gallery-thumbs").outerHeight() - 45;
    var prodsize = $(".pdp-right").width() - 80;
    var tableft = $(window).width() - $(".pdp-right").width() - 2;
    
    function init () {
        var overlayHeight = $(window).height() - $("header.mainheader").height();
        var topoffset = $(".pdpnav").outerHeight();
        var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight() - $(".refinenav").outerHeight();
        var windowwidth = $(window).width();
        var imgsize = $(window).width() - 80;
        var imgsizetab = imgsize - $(".pdp-right").width();
        var carouselmaxsize = overlayHeight - topoffset - $(".gallery-thumbs").outerHeight() - 45;
        var prodsize = $(".pdp-right").width() - 80;
        var tableft = $(window).width() - $(".pdp-right").width() - 2;
        $("div.main-container").css("height", overlayHeight);
        $("div.main-container").css("top", $("header.mainheader").height());
        $("div.filters-overlay").css("height", overlayHeight);
        $("div.filters-inner").css("height", filtersInnerHeight);
        $("div.pdp-overlay").css("height", overlayHeight);
        $("div.pdp-overlay").css("width", $(window).width());
        $("div.pdp-inner").css("height", overlayHeight);
        $("div#pdpcontent").css("height", overlayHeight);
        $(".swiper-container").css("width", imgsize);
        $(".main-swiper").css("height", overlayHeight - topoffset - $(".gallery-thumbs").outerHeight() - 45);
        $(".products-slide").css("width", prodsize);
        if (windowwidth >= 768) {
            $(".pdp-left .swiper-container").css("width", imgsizetab);
            $(".pdp-left").css("width", tableft);
            $(".pdp-left").css("height", overlayHeight - topoffset);
            $(".pdp-right").css("height", overlayHeight);
            $(".pdp-right .swiper-container").css("width", prodsize);
            $(".main-swiper").css("height", overlayHeight - topoffset - $(".gallery-thumbs").outerHeight);
            $(".swiper-slide img").css("max-height", carouselmaxsize);
            $(".swiper-slide img").css("max-width", carouselmaxsize);
            $(".dock").css("top", topoffset);
            $(".pdp-right").scroll(function () {
                var yt = $(this).scrollTop();
                if (yt > 380) {
                    stickyin();
                } else {
                    stickyout();
                }
            });
        } else if (windowwidth < 768) {
            $(".pdp-left").css("width", windowwidth);
            $(".pdp-left").css("height", "auto");
            $(".pdp-right .swiper-container").css("width", prodsize);
            $(".mobdock").css("top", "60px");
            $(".main-swiper").css("height", "auto");
            $(".pdp-inner").scroll(function () {
                var ym = $(this).scrollTop();
                if (ym > 700) {
                    mobstickyin();
                } else {
                    mobstickyout();
                }
            });
        }
    }
    
   init();
    
    function stickyin () {
        $('.dock').slideDown();
        $('.backtotop').fadeIn();
    }
    
    function stickyout () {
        $('.dock').slideUp();
        $('.backtotop').fadeOut();
    }
    
    function mobstickyin () {
        $('.mobdock').slideDown();
        $('.mobbacktotop').fadeIn();
    }
    
    function mobstickyout () {
        $('.mobdock').slideUp();
        $('.mobbacktotop').fadeOut();
    }

    /* RESIZE */
    $(window).resize(function () {
        init();
    });

    /* FILTERS */
    $("div.filters-overlay").css("top", $("header.mainheader").height());

    $("#hidefilters").click(function () {
        if ($("div.filters-inner").hasClass("filters-in")) {
            $("div.filters-inner").removeClass("filters-in");
            $("div.filters-inner").addClass("filters-out");
            $("body").css("overflow", "auto");
            $("div.filters-overlay").delay(300).hide(0);
        }
		if ($("div.refinenav").hasClass("filters-in")) {
            $("div.refinenav").removeClass("filters-in");
            $("div.refinenav").addClass("filters-out");
        }
    });

    $("#showfilters").click(function () {
        $("div.filters-overlay").show();
        if ($("div.filters-inner").hasClass("filters-out")) {
            $("div.filters-inner").removeClass("filters-out");
            $("div.filters-inner").addClass("filters-in");
            $("body").css("overflow", "hidden");
        }
        if ($("div.refinenav").hasClass("filters-out")) {
            $("div.refinenav").removeClass("filters-out");
            $("div.refinenav").addClass("filters-in");
        }
    });

    /* COLOURS */
    $("#showcolours").click(function () {
        $("section.options div.colours").css("height", "auto");
        $("#showcolours").css("display", "none");
        $("#hidecolours").css("display", "block");
    });

    $("#hidecolours").click(function () {
        $("section.options div.colours").css("height", "63px");
        $("#hidecolours").css("display", "none");
        $("#showcolours").css("display", "block");
    });

    /* PDP */
    $("div.pdp-overlay").css("top", $("header.mainheader").height());
    $("div.pdp-overlay").css("width", $(window).width());

    $("#hidepdp").click(function () {
        if ($("div.pdp-inner").hasClass("pdp-in")) {
            $("div.pdp-inner").removeClass("pdp-in");
            $("div.pdp-inner").addClass("pdp-out");
            $("body").css("overflow", "auto");
            $("div.pdp-overlay").delay(300).hide(0);
        }
    });

    $("#showpdp").click(function () {
        $("div.pdp-overlay").show();
        if ($("div.pdp-inner").hasClass("pdp-out")) {
            $("div.pdp-inner").removeClass("pdp-out");
            $("div.pdp-inner").addClass("pdp-in");
            $(".pdp-overlay").css("top", topoffset);
            $("body").css("overflow", "hidden");
            $("div.pdp-inner").load("pdp.html #pdpcontent", function () {
                $.getScript('scripts/overlay.js', function () {
                    $.getScript('scripts/swiper.jquery.js', function () {
                        var imgsize = $(".pdp-left").width() - 80;
                        var prodsize = $(".pdp-right").width() - 80;
                        $("#swiperscript").replaceWith('<script> var mainSwiper = new Swiper(".main-swiper", { pagination: ".swiper-pagination" }); var swiperThumbs = new Swiper(".gallery-thumbs", { spaceBetween: 15, centeredSlides: true, slidesPerView: "auto", touchRatio: 0.2, slideToClickedSlide: true }); mainSwiper.params.control = swiperThumbs; swiperThumbs.params.control = mainSwiper; </script>');
                        $("#soscript").replaceWith('<style>.specialoffers-container { width: ' + imgsize + 'px; height: auto; } </style> <script> var soswiper = new Swiper(".specialoffers-container", { loop: true, pagination: ".specialoffers-pagination" }); </script>');
                        $("#viewedslider").replaceWith('<style>.products-container { height: auto !important;} .products-wrapper { width: ' + prodsize + 'px !important; height: auto;  .products-slide { width: ' + prodsize + 'px !important; height: auto; } </style> <script> var viewedswiper = new Swiper(".prod-one", { loop: true, pagination: ".prod-one-pagination" }); </script>');
                        $("#freqslider").replaceWith('<style>.products-container { height: auto !important;} .products-wrapper { width: ' + prodsize + 'px !important; height: auto;  .products-slide { width: ' + prodsize + 'px !important; height: auto; } </style> <script> var freqswiper = new Swiper(".prod-two", { loop: true, pagination: ".prod-two-pagination" }); </script>');
                    });
                });
            });
        }
    });
	
	/* BACK TO TOP */
	$("#totoptab").click(function () {
        $(".pdp-right").animate({scrollTop: 0},"slow");
	});
    
    
	$("#totopmob").click(function () {
        $(".pdp-inner").animate({scrollTop: 0},"slow");
	});
    
    /* PLP VIEW CHANGE */
    $("#viewflip").click(function () {
        if ($("div.product").hasClass("twelve")) {
            $("div.product").removeClass("twelve");
            $("div.product").addClass("six");
            $("div.product").removeClass("rows");
            $("div.prodleft").removeClass("five");
            $("div.content").removeClass("seven");
            $(".flagscolumns").css("display", "block");
            $(".content .flags").css("display", "none");
        }
        else if ($("div.product").hasClass("six")) {
            $("div.product").removeClass("six");
            $("div.product").addClass("twelve");
            $("div.product").addClass("rows");
            $("div.prodleft").addClass("five");
            $("div.content").addClass("seven");
            $(".flagscolumns").css("display", "none");
            $(".content .flags").css("display", "block");
        }
    });
    
});