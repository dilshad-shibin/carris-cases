$(document).ready(function(){

    var container = $(".menuWrp-inner");
    // var menuIconContainer = $(".logo-iconWrp");
    var mainMenuCnt = $(".menuWrp-inner .mainMenuCnt");
    var closeBtn = $(".menuWrp-inner .mainMenu-close");
    var subMenuAll = $(".menuWrp-inner .mainMenu li ul");
    var subMenuHeight;

    var openWidth = '100%';
    var closeWidth = '0%';



    // Open Menu
    $("#hamburger2").click(function(){
        container.stop();
        // menuIconContainer.stop();
        mainMenuCnt.stop();

        container.addClass("isOpen");
            container.animate({
                width: openWidth
            }, 600, function() {
                mainMenuCnt.animate({
                    opacity: 1
                });
                mainMenuCnt.show();
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
                // callback
            });
        });
    });

    // Submenu
    $(".menuWrp-inner .mainMenu li").has("ul").find("a").click(function(event) {
        // event.preventDefault();
        subMenuAll.stop();
        var ul = $(this).siblings("ul");
        var parentLi = $(this).parent("li");
        subMenuHeight = $("#resp-menuWrp").height();
        // Show using function
        submenuShow(ul, function() {
            ul.animate({
                    width: '100%',
                    height: (subMenuHeight / 1)
            }, 400);
        });
        // Hide using function
        $(".menuWrp-inner .subMenu-hide").click(function() {
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
