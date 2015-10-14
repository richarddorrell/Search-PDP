$(document).ready(function () {
    
    var overlayHeight = $(window).height() - $("header.mainheader").height();
    var topoffset = $(".pdpnav").outerHeight();
    var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight();
    var windowwidth = $(window).width();
    var imgsize = $(window).width() - 80;
    var imgsizetab = imgsize - $(".pdp-right").width();
<<<<<<< HEAD
    var carouselmaxsize = overlayHeight - topoffset - $(".gallery-thumbs").outerHeight() - 45;
    var prodsize = $(".pdp-right").width() - 80;
    var tableft = $(window).width() - $(".pdp-right").width() - 2;
=======
    var prodsize = $(".pdp-right").width() - 80;
    var tableft = $(window).width() - $(".pdp-right").width() - 2;
    $(".dock").hide();
    $(".backtotop").hide();
>>>>>>> origin/gh-pages
    
    function init () {
        var overlayHeight = $(window).height() - $("header.mainheader").height();
        var topoffset = $(".pdpnav").outerHeight();
        var filtersInnerHeight = overlayHeight - $("div.sticky").outerHeight();
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
<<<<<<< HEAD
        $(".main-swiper").css("height", overlayHeight - topoffset - $(".gallery-thumbs").outerHeight() - 45);
=======
>>>>>>> origin/gh-pages
        $(".products-slide").css("width", prodsize);
        if (windowwidth >= 768) {
            $(".pdp-left .swiper-container").css("width", imgsizetab);
            $(".pdp-left").css("width", tableft);
            $(".pdp-left").css("height", overlayHeight - topoffset);
            $(".pdp-right").css("height", overlayHeight);
            $(".pdp-right .swiper-container").css("width", prodsize);
<<<<<<< HEAD
            $(".main-swiper").css("height", overlayHeight - topoffset - $(".gallery-thumbs").outerHeight);
            $(".swiper-slide img").css("max-height", carouselmaxsize);
            $(".swiper-slide img").css("max-width", carouselmaxsize);
            $(".dock").css("top", topoffset);
            $(".pdp-right").scroll(function () {
                var yt = $(this).scrollTop();
                if (yt > 300) {
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
                if (ym > 100) {
                    mobstickyin();
                } else {
                    mobstickyout();
=======
            $(".dock").css("top", topoffset);
            $(".pdp-right").scroll(function () {
                var y = $(this).scrollTop();
                if (y > 300) {
                    $("#totopmob").hide();
                    $("#totoptab").show();
                    stickyin();
                } else {
                    $("#totoptab").hide();
                    $("#totopmob").show();
                    stickyout();
                }
            });
        } else {
            $(".pdp-left").css("width", windowwidth);
            $(".pdp-left").css("height", "auto");
            $(".pdp-right .swiper-container").css("width", prodsize);
            $(".dock").css("top", "0px");
            $(".pdp-inner").scroll(function () {
                var y = $(this).scrollTop();
                if (y > 100) {
                    stickyin();
                } else {
                    stickyout();
>>>>>>> origin/gh-pages
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
<<<<<<< HEAD
    
    function mobstickyin () {
        $('.mobdock').slideDown();
        $('.mobbacktotop').fadeIn();
    }
    
    function mobstickyout () {
        $('.mobdock').slideUp();
        $('.mobbacktotop').fadeOut();
    }
=======
	
	$("#foo").slideme({
		arrows: true,
		pagination: "numbers",
		css3: true,
		loop: true,
		resizable: {
			width: 320,
			height: 240
		},
		thumbs: {
			width: 48,
			height: 48
		}
	});
>>>>>>> origin/gh-pages

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
<<<<<<< HEAD
		if ($("div.refinenav").hasClass("filters-in")) {
            $("div.refinenav").removeClass("filters-in");
            $("div.refinenav").addClass("filters-out");
=======
		if ($("div.sticky").hasClass("filters-in")) {
            $("div.sticky").removeClass("filters-in");
            $("div.sticky").addClass("filters-out");
>>>>>>> origin/gh-pages
        }
    });

    $("#showfilters").click(function () {
        $("div.filters-overlay").show();
        if ($("div.filters-inner").hasClass("filters-out")) {
            $("div.filters-inner").removeClass("filters-out");
            $("div.filters-inner").addClass("filters-in");
            $("body").css("overflow", "hidden");
        }
<<<<<<< HEAD
        if ($("div.refinenav").hasClass("filters-out")) {
            $("div.refinenav").removeClass("filters-out");
            $("div.refinenav").addClass("filters-in");
=======
        if ($("div.sticky").hasClass("filters-out")) {
            $("div.sticky").removeClass("filters-out");
            $("div.sticky").addClass("filters-in");
>>>>>>> origin/gh-pages
        }
    });

    /* COLOURS */
    $("#showcolours").click(function () {
<<<<<<< HEAD
        $("section.options div.colours").css("height", "auto");
=======
        $("div.colours").css("height", "auto");
>>>>>>> origin/gh-pages
        $("#showcolours").css("display", "none");
        $("#hidecolours").css("display", "block");
    });

    $("#hidecolours").click(function () {
<<<<<<< HEAD
        $("section.options div.colours").css("height", "63px");
=======
        $("div.colours").css("height", "63px");
>>>>>>> origin/gh-pages
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
<<<<<<< HEAD
                        $("#swiperscript").replaceWith('<script> var mainSwiper = new Swiper(".main-swiper", { pagination: ".swiper-pagination" }); var swiperThumbs = new Swiper(".gallery-thumbs", { spaceBetween: 15, centeredSlides: true, slidesPerView: "auto", touchRatio: 0.2, slideToClickedSlide: true }); mainSwiper.params.control = swiperThumbs; swiperThumbs.params.control = mainSwiper; </script>');
                        $("#soscript").replaceWith('<style>.specialoffers-container { width: ' + imgsize + 'px; height: auto; } </style> <script> var soswiper = new Swiper(".specialoffers-container", { loop: true, pagination: ".specialoffers-pagination" }); </script>');
                        $("#viewedslider").replaceWith('<style>.products-container { height: auto !important;} .products-wrapper { width: ' + prodsize + 'px !important; height: auto;  .products-slide { width: ' + prodsize + 'px !important; height: auto; } </style> <script> var viewedswiper = new Swiper(".prod-one", { loop: true, pagination: ".prod-one-pagination" }); </script>');
                        $("#freqslider").replaceWith('<style>.products-container { height: auto !important;} .products-wrapper { width: ' + prodsize + 'px !important; height: auto;  .products-slide { width: ' + prodsize + 'px !important; height: auto; } </style> <script> var freqswiper = new Swiper(".prod-two", { loop: true, pagination: ".prod-two-pagination" }); </script>');
=======
                        $("#fooscript").replaceWith('<script>$("#foo").slideme({arrows: true,pagination: "numbers",css3: true,loop: true,resizable: { width: 320, height: 240 }, thumbs: { width: 48, height: 48 } });</script>');
                        $("#swiperscript").replaceWith('<style>.swiper-container { width: ' + imgsize + 'px; height: auto; } </style> <script> var swiper = new Swiper(".swiper-container"); </script>');
                        $("#contentsliders").replaceWith('<style>.products-container { height: auto !important;} .products-wrapper { width: ' + prodsize + 'px !important; height: auto;  .products-slide { width: ' + prodsize + 'px !important; height: auto; } </style> <script> var swiper = new Swiper(".prod-one"); var swiper = new Swiper(".prod-two"); </script>');
>>>>>>> origin/gh-pages
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
    
<<<<<<< HEAD
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
    
=======
>>>>>>> origin/gh-pages
});