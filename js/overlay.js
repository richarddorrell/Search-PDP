$(document).ready(function () {
    
    var body = $("body");
    var maincontainer = $(".main-container");
    var mainheader = $(".mainheader");
    var filtersoverlay = $(".filters-overlay");
    var filtersinner = $(".filters-inner");
    var overlay = $(".overlay");
    var overlayinner = $(".overlay-inner");
    var pdpoverlay = $(".pdp-overlay");
    var pdpcontent = $(".pdpcontent");
    var pdpnav = $(".pdpnav");
    var product = $(".product");
    var producttitle = $(".prodright h2");
    var prodleft = $(".prodleft");
    var prodright = $(".prodright");
    var specs = $(".specs");
    var dock = $(".dock");
    var refinenav = $(".refinenav");
    var sticky = $(".sticky");
    var backtotop = $(".backtotop");
    var flags = $(".product .flags");
    var flagscolumns = $(".product .flagscolumns");
    var colours = $(".options .colours");
    var showcolours = $("#showcolours");
    var hidecolours = $("#hidecolours");
    
    var overlayHeight = $(window).height() - mainheader.outerHeight();
    var topoffset = pdpnav.outerHeight() + mainheader.outerHeight();
    var filtersInnerHeight = overlayHeight - sticky.outerHeight() - refinenav.outerHeight();
    var windowwidth = $(window).width();
    
    function init () {
        var overlayHeight = $(window).height() - mainheader.outerHeight();
        var topoffset = pdpnav.outerHeight();
        var filtersInnerHeight = overlayHeight - sticky.outerHeight() - refinenav.outerHeight();
        var windowwidth = $(window).width();
        filtersoverlay.css("height", overlayHeight);
        dock.css("top", topoffset);
        if (windowwidth >= 768) {
            flags.css("display", "none");
            flagscolumns.css("display", "block");
            pdpcontent.scroll(function () {
                var yt = $(this).scrollTop();
                if (yt > 380) {
                    stickyin();
                } else {
                    stickyout();
                }
            });
        } else if (windowwidth < 768) {
            flags.css("display", "block");
            flagscolumns.css("display", "none");
            pdpcontent.scroll(function () {
                var ym = $(this).scrollTop();
                if (ym > 700) {
                    mobstickyin();
                } else {
                    mobstickyout();
                }
            });
        }
    }
    
    function resize () {
        var overlayHeight = $(window).height() - mainheader.outerHeight();
        var topoffset = pdpnav.outerHeight();
        var filtersInnerHeight = overlayHeight - sticky.outerHeight() - refinenav.outerHeight();
        var windowwidth = $(window).width();
        filtersoverlay.css("height", overlayHeight);
        dock.css("top", topoffset);
        if (windowwidth >= 768) {
            pdpcontent.scroll(function () {
                var yt = $(this).scrollTop();
                if (yt > 380) {
                    stickyin();
                } else {
                    stickyout();
                }
            });
            if (product.hasClass("col-sm-6")) {
                flags.css("display", "none");
                flagscolumns.css("display", "block");
                producttitle.css("height", "34px");
            }
            else {
                flags.css("display", "block");
                flagscolumns.css("display", "none");
                producttitle.css("height", "auto");
            }
        } else if (windowwidth < 768) {
            pdpcontent.scroll(function () {
                var ym = $(this).scrollTop();
                if (ym > 700) {
                    mobstickyin();
                } else {
                    mobstickyout();
                }
            });
            if (product.hasClass("col-xs-12")) {
                flags.css("display", "block");
                flagscolumns.css("display", "none");
                producttitle.css("height", "auto");
            }
            else {
                flags.css("display", "none");
                flagscolumns.css("display", "block");
                producttitle.css("height", "34px");
            }
        }
    }
    
   init();
    
    function stickyin () {
        dock.slideDown();
        backtotop.fadeIn();
    }
    
    function stickyout () {
        dock.slideUp();
        backtotop.fadeOut();
    }

    /* RESIZE */
    $(window).resize(function () {
        resize();
    });

    /* FILTERS */
    $("#hidefilters").click(function () {
        if (filtersinner.hasClass("filters-in")) {
            filtersinner.removeClass("filters-in");
            filtersinner.addClass("filters-out");
            body.css("overflow", "auto");
            filtersoverlay.delay(300).hide(0);
        }
		if (refinenav.hasClass("filters-in")) {
            refinenav.removeClass("filters-in");
            refinenav.addClass("filters-out");
        }
    });

    $("#showfilters").click(function () {
        filtersoverlay.show();
        if (filtersinner.hasClass("filters-out")) {
            filtersinner.removeClass("filters-out");
            filtersinner.addClass("filters-in");
            body.css("overflow", "hidden");
        }
        if (refinenav.hasClass("filters-out")) {
            refinenav.removeClass("filters-out");
            refinenav.addClass("filters-in");
        }
    });
    
    /* OVERLAY */    
    $(".showoverlay").click(function () {
        overlay.show();
        body.css("overflow", "hidden");
        if (overlayinner.hasClass("overlay-out")) {
            overlayinner.removeClass("overlay-out");
            overlayinner.addClass("overlay-in");
        }
        if (windowwidth >= 768) {
            overlay.css("top", body.scrollTop());
            overlay.css("height", overlayHeight - pdpnav.outerHeight());
            overlayinner.css("height", overlayHeight - pdpnav.outerHeight());
        }
        else if (windowwidth < 768) {
            overlay.css("top", body.scrollTop());
            overlay.css("height", overlayHeight);
            overlayinner.css("height", overlayHeight);
            pdpcontent.css("overflow", "none");
        }
    });
    
    $(".hideoverlay").click(function () {
        body.css("overflow", "auto");
        if (overlayinner.hasClass("overlay-in")) {
            overlayinner.removeClass("overlay-in");
            overlayinner.addClass("overlay-out");
            overlay.delay(300).hide(0);
        }
    });

    /* COLOURS */
    showcolours.click(function () {
        colours.css("height", "auto");
        showcolours.css("display", "none");
        hidecolours.css("display", "block");
    });

    hidecolours.click(function () {
        colours.css("height", "61px");
        hidecolours.css("display", "none");
        showcolours.css("display", "block");
    });
	
	/* BACK TO TOP */
	$("#totop").click(function () {
        pdpcontent.animate({scrollTop: 0},"slow");
	});
    
    /* PLP VIEW CHANGE */
    $(".viewflip").click(function () {
        
        
        function fliptocolumn () {
            if ($(window).width() < 768) {
                prodleft.removeClass("col-xs-4");
                prodright.removeClass("col-xs-8");
            }
            else if ($(window).width() >= 768) {
                prodleft.removeClass("col-sm-4");
                prodleft.addClass("col-sm-12");
                prodright.removeClass("col-sm-8 col-md-4");
                prodright.addClass("col-sm-12");
                specs.removeClass("col-md-4");
                specs.css("display", "none");
            }    
            flags.css("display", "none");
            flagscolumns.css("display", "block");
            producttitle.css("height", "34px");
        }
        
        function fliptorow () {
            if ($(window).width() < 768) {
                prodleft.addClass("col-xs-4");
                prodright.addClass("col-xs-8");
            }
            else if ($(window).width() >= 768) {
                prodleft.removeClass("col-sm-12");
                prodleft.addClass("col-sm-4");
                prodright.removeClass("col-sm-12");
                prodright.addClass("col-sm-8 col-md-4");
                specs.addClass("col-md-4");
                specs.css("display", "flex");
            }
            flags.css("display", "block");
            flagscolumns.css("display", "none");
            producttitle.css("height", "auto");
        }
        
        if ($(window).width() < 768) {
            if (product.hasClass("col-xs-12")) {
                product.removeClass("col-xs-12");
                product.addClass("col-xs-6");
                fliptocolumn();
            }
            else if (product.hasClass("col-xs-6")) {
                product.removeClass("col-xs-6");
                product.addClass("col-xs-12");
                fliptorow();
            }
        }
        else if ($(window).width() >= 768) {
            if (product.hasClass("col-sm-12")) {
                product.removeClass("col-sm-12 col-md-12 col-lg-12");
                product.addClass("col-sm-6 col-md-4 col-lg-3");
                fliptocolumn();
            }
            else if (product.hasClass("col-sm-6")) {
                product.removeClass("col-sm-6 col-md-4 col-lg-3");
                product.addClass("col-sm-12 col-md-12 col-lg-12");
                fliptorow();
            }
        }
    });
    
    
    
    /* SHOW ALL BUTTONS */
    $(".showall").click(function () {
        $(this).next().css("display", "block");
        $(this).css("display", "none");
    });
    
    var screensize = window.matchMedia("(min-width: 768px)");
    screensize.addListener(handleSizeChange);
    handleSizeChange(screensize);
    function handleSizeChange(screensize) {
        if (screensize.matches) {
            $(".pdp-left").addClass("col-sm-7");
            $(".pdp-right").addClass("col-sm-5");
            $(".left-1, .left-2, .left-3").appendTo(".pdp-left .row");
            $(".right-1, .right-2, .right-3").appendTo(".pdp-right .row");
        }
        else {
            $(".pdp-left").removeClass("col-sm-7");
            $(".pdp-right").removeClass("col-sm-5");
            $(".left-1").insertAfter(".pdp-right");
            $(".right-1").insertAfter(".left-1");
            $(".left-2").insertAfter(".right-1");
            $(".right-2").insertAfter(".left-2");
            $(".left-3").insertAfter(".right-2");
            $(".right-3").insertAfter(".left-3");
        }
    };
        
});