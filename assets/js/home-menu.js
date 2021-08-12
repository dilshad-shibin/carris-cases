$(document).ready(function(){

    var deviceWidth = $(window).width();
    if(deviceWidth <= 767)
        return 0;

    var container = $(".menuWrp");
    var menuIconContainer = $(".logo-iconWrp");
    var mainMenuCnt = $(".mainMenuCnt");
    var closeBtn = $(".mainMenu-close");
    var subMenuAll = $(".mainMenu li ul");
    var subMenuHeight;
    var windowHeight = $(window).height();

    var openWidth = '33.33%';
    var closeWidth = '7%';



    // Open Menu
    $("#hamburger1").click(function(){
        container.stop();
        menuIconContainer.stop();
        mainMenuCnt.stop();

        container.addClass("isOpen");
        menuIconContainer.animate({
            opacity: 0,
            marginLeft: '-25px'
        }, 100, 'linear', function() {
            menuIconContainer.hide();
            container.animate({
                width: openWidth
            }, 600, function() {
                mainMenuCnt.animate({
                    opacity: 1
                });
                mainMenuCnt.show();
            });
        });

    });

    // Close Menu
    closeBtn.click(function(){
        container.removeClass("isOpen");
        mainMenuCnt.animate({
            opacity: 0
        }, 100, 'linear', function() {
                mainMenuCnt.hide();
                container.animate({
                    width: closeWidth
            }, 400, function(){
                menuIconContainer.animate({
                    opacity: 1,
                    marginLeft: '0'
                }, 100);
                menuIconContainer.show();
            });
        });
    });

    // Submenu
    $(".mainMenu li").has("ul").find("a").click(function(event) {
        // event.preventDefault();
        subMenuAll.stop();
        var ul = $(this).siblings("ul");
        var parentLi = $(this).parent("li");
        subMenuHeight = $("#homeDesktop-menuWrp").height();


        // Show using function
        submenuShow(ul, function() {
            ul.animate({
                    width: '100%',
                    height: (subMenuHeight / 1)
            }, 400, function() { 
            });
        });
        // Hide using function
        $(".subMenu-hide").click(function() {
            ul = $(this).closest("ul");
            submenuHide(ul, function() {
            });
        });


    });

    // Show submenu
    function submenuShow(ul, callback) {
        ul.css("display", "flex");
        return callback();
    }
    // Hide submenu
    function submenuHide(ul, callback){
        ul.animate({
                width: '0',
                height: '0'
            }, 200, function() {
        });
        return callback();
    }

});
