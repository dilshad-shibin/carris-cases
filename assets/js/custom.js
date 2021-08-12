$(document).ready(function() {



    // Contact - Left width increase/decreses
    (function($) {
        var width;
        var temp;
        var tab = $(".contact-left");
        var tabActive = $(".contact-left.active");
        var mainNav = $(".mainNav li a");

        tab.each(function(){
            width = $(this).width();
            $(this).not(tabActive).css('left', '-'+width+'px');
        });


        mainNav.click(function(event) {

            event.preventDefault();

            tab.stop();

            // Contact - Main Navigation Active
            var mainNavActive = $(this);
            var mainNavRest = mainNav.not(mainNavActive);
            mainNavRest.removeClass("active");
            mainNavActive.addClass("active");


            var timeout = 0;
            event.preventDefault();
            var targetId = $(this).attr("data-href");
            var tabSelected = $(".contact-left-wrapper").find("[data-slide='" + targetId + "']");
            var restTabs = tab.not(tabSelected);

            restTabs.each(function(){
                $(this).removeClass("active");
            });

            tabSelected.addClass("active");
            tabSelected.animate({
                left: '0px'
            }, 1000, function(){
                temp = '-'+width+'px';
                restTabs.animate({
                    left: temp
                }, 300);
            });

        });

    })(jQuery);


    // Contact place nav
    (function($) {
        var linkLi = $(".contact-left-address .nav-tabs li");
        var link = $(".contact-left-address .nav-tabs .nav-item .nav-link");
        var parent;
        link.click(function(){
        $(".contact-left-address .nav-tabs li").removeClass("liActive");
        $(this).closest("li").addClass("liActive");
    });
    })(jQuery);



    // Features
    (function($) {
        var f_btn_open = $("#btn-features");
        var f_btn_close = $("#btn-fclose");
        var fslide = $("#features-slideWrp");
        var fslide_inner = $("#features-slideWrp-inner");

        f_btn_open.click(function() {
            showFeatures(function(){
                setTimeout(function(){
                    fslide_inner.animate({
                        opacity: 1
                    }, 600);
                }, 600);
            });
        });

        f_btn_close.click(function() {
            fslide_inner.animate({
                opacity: 0
            }, 300, function(){
                fslide.removeClass("active");
            });
        });

        function showFeatures(callback) {
            fslide.addClass("active");
            return callback();
        }
    })(jQuery);


    // Product page slick click replica
    (function($) {
        var prev = $("#btn-prev");
        var next = $("#btn-next");

        prev.click(function() {
            $(".ppSlider .slick-prev").trigger("click");
        });
        next.click(function() {
            $(".ppSlider .slick-next").trigger("click");
        });
    })(jQuery);


    // Inner page navigation dropdown
    (function($) {
        var navLi = $(".custom_nav .nav li").has("ul");
        navLi.hover(
            function() {
                $(this).children("ul").css("display", "block");
            }, function() {
                $(this).children("ul").css("display", "none");
            }
        );
    })(jQuery);








});
