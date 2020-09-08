$(function () {
    $('#preloader').delay(550).fadeOut('slow');
    
    $(window).scroll(function () {
        var introH = $(".banner").height() - 90
        if ($(document).scrollTop() > introH) {
            $(".nav").fadeIn(400)

        } else {
            $(".nav").fadeOut(200)
            $(".nav-toggle").removeClass("active")
            $(".nav-menu").removeClass("active")
        };
        
    });


    $(".nav-toggle").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".nav-menu").toggleClass("active")
    });

    var text_typed = $(".text").text();
    $(".text1").typed({
        strings: text_typed.split(","),
        typeSpeed: 130,
        loop: true,
        backDelay: 1100,
        backSpeed: 50
    });

    $(".nav-menu li,.down").click(function () {
        var index = $(this).index();
        var top = $(".main3 .w").eq($(this).index()).offset().top;
        $("html,body").stop().animate({
            scrollTop: top
        }, 700);

    });

    $(window).scroll(function () {
        toggleTool();
        $(".main3 .w").each(function (i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top - 1) {
                $(".nav-menu li").eq(i).addClass("active").siblings().removeClass("active");
            };

        });
    });

    var top = $(".main3-1").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= top) {
            $(".a-top").fadeIn();
        } else {
            $(".a-top").fadeOut();
        };
    };

    $(".a-top,.logo").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 500);
    });
});