$(function () {
    //li索引
    $(".ul1 li").click(function () {
        var index = $(this).index();
        var top = $(".main3 .w").eq($(this).index()).offset().top;
        $("html,body").stop().animate({
            scrollTop: top
        })

    });
    //返回顶部
    var top = $(".main3").offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= top) {
            $(".a-top").fadeIn();
        } else {
            $(".a-top").fadeOut();
        };
    });
    $(".a-top").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        });
    });
});