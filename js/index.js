$(function () {
    //纯手打
    //进入缓冲
    $('#preloader').delay(550).fadeOut('slow');

    //导航效果
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 550) {
            $(".nav").stop().fadeIn(100)

        } else {
            $(".nav").stop().fadeOut(100)
            $(".nav-toggle").removeClass("active")
            $(".nav-menu").removeClass("active")
        };
        console.log($(document).scrollTop());
    });

    //响应式导航效果未完善
    $(".nav-toggle").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".nav-menu").toggleClass("active")
    });

    //打字效果
    var text_typed = $(".text").text();
    $(".text1").typed({
        strings: text_typed.split(","),
        typeSpeed: 130,
        loop: true,
        backDelay: 1100,
        backSpeed: 50
    });

    //li索引到指定div
    $(".nav-menu li,.down").click(function () {
        var index = $(this).index();
        var top = $(".main3 .w").eq($(this).index()).offset().top;
        $("html,body").stop().animate({
            scrollTop: top
        }, 700);

    });

    //li到指定位置::before显示
    $(window).scroll(function () {
        toggleTool();
        $(".main3 .w").each(function (i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top - 1) {
                $(".nav-menu li").eq(i).addClass("active").siblings().removeClass("active");
            };

        });
    });

    //返回顶部按钮指定位置淡出淡入
    var top = $(".main3-1").offset().top;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= top) {
            $(".a-top").fadeIn();
        } else {
            $(".a-top").fadeOut();
        };
    };
    //返回顶部
    $(".a-top,.logo").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 500);
    });
});