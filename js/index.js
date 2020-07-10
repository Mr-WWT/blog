$(function () {
    //纯手打
    //导航效果
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 50) {
            $(".nav").addClass("active");
            $(".icon").css("color", "#0078ff");

        } else {
            $(".nav").removeClass("active");
            $(".icon").css("color", "#fff");
        };
    });

    //响应式导航效果未完善
    $("#toggle").click(function () {
        $(this).parents(".nav").addClass("active");
        $(this).siblings(".ul1").css("top", "75px");
        $(this).children().css("color", "#0078ff");
    });
    
    //打字效果
    var text_typed = $(".text").text();
    console.log($(".text").text());
    $(".text1").typed({
        strings: text_typed.split(","),
        typeSpeed: 120,
        loop: true,
        backDelay: 1100,
        backSpeed: 50
    })

    //li索引到指定div
    $(".ul1 li").click(function () {
        var index = $(this).index();
        var top = $(".main3 .w").eq($(this).index()).offset().top;
        $("html,body").stop().animate({
            scrollTop: top
        }, 500);

    });

    //li到指定位置::before显示
    $(window).scroll(function () {
        toggleTool();
        $(".main3 .w").each(function (i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top - 1) {
                $(".ul1 li").eq(i).addClass("active").siblings().removeClass("active");
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
    $(".a-top,.aa").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 500);
    });
});