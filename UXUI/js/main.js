$(document).ready(function () {


    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // $('#header').on('click',function () {
    //     $('#menu-pop').addClass('on');
    // });
    //
    // $('#menu-pop .close').on('click',function () {
    //     $('#menu-pop').removeClass('on');
    // });


    // slide event
    $('#scene01-fix .scene01-main-slide').slidesjs({
        width:1920,
        height:980,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 5000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });


    $(".scene02-slide-wrap").slick({
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.left-button'), //이전 화살표
        nextArrow: $('.right-button'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 5000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });

    // $('.slider')
    //     .on('init', function(event, slick){
    //
    //     })
    //     .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //         starList()
    //     })
    //     .on('afterChange', function(event, slick, currentSlide, nextSlide){
    //         starList()
    //     });
    //
    // function list01(){
    //
    // }
    //
    // function list02(){
    //
    //
    // }
    //
    // function list03(){
    //
    // }
    //
    // function starList(){
    //
    //     if($('#slick00').hasClass('slick-active')){
    //         list01();
    //     }
    //
    //     if($('#slick01').hasClass('slick-active')){
    //         list02();
    //     }
    //
    //     if($('#slick02').hasClass('slick-active')){
    //         list03();
    //     }
    // }


});

$(function () {

    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);



        if (a >= 100) {
            $("#scene02 .discoverModels").addClass('on');
            $("#scene02 .bar").addClass('on');
            $("#scene02 .scene02-slide-wrap").addClass('on');

        } else {
            $("#scene02 .discoverModels").removeClass('on');
            $("#scene02 .bar").removeClass('on');
            $("#scene02 .scene02-slide-wrap").removeClass('on');
        }



        if (a >= 870) {
            $("#header").fadeOut();
        } else {
            $("#header").fadeIn();
        }

        if (a >= 500) {
            $(".sns,.explore-button-main").fadeOut();
        } else {
            $(".sns,.explore-button-main").fadeIn();
        }


        if (a >= 1100) {
            $('#scene03 .configurator').addClass('on');
            $('#scene03 .line03').addClass('on');
            $('#scene03 #scene03 .car-wrap').addClass('on');
        } else {
            $('#scene03 .configurator').removeClass('on');
            $('#scene03 .line03').removeClass('on');
            $('#scene03 #scene03 .car-wrap').removeClass('on');
        }

        if (a >= 1200) {
            $('#scene03 .car01,#scene03 .car02,#scene03 .car03').addClass('on');
        } else {
            $('#scene03 .car01,#scene03 .car02,#scene03 .car03').removeClass('on');
        }


        if (a >= 2100) {
            $('#scene04 .box1').addClass('on');
            $('#scene04 .line04').addClass('on');
            $('#scene04 .driving-text1').addClass('on');
            $('#scene04 .driving-text2').addClass('on');
            $('#scene04 .read-button1').addClass('on');

        } else {
            $('#scene04 .box1').removeClass('on');
            $('#scene04 .line04').removeClass('on');
            $('#scene04 .driving-text1').removeClass('on');
            $('#scene04 .driving-text2').removeClass('on');
            $('#scene04 .read-button1').removeClass('on');

        }


        if (a >= 3200) {
            $('#scene04 .box2').addClass('on');
            $('#scene04 .line04-2').addClass('on');
            $('#scene04 .vision-text1').addClass('on');
            $('#scene04 .vision-text2').addClass('on');
            $('#scene04 .read-button2').addClass('on');
        } else {
            $('#scene04 .box2').removeClass('on');
            $('#scene04 .line04-2').removeClass('on');
            $('#scene04 .vision-text1').removeClass('on');
            $('#scene04 .vision-text2').removeClass('on');
            $('#scene04 .read-button2').removeClass('on');
        }


        if (a >= 4000) {
            $('#scene05 .text5').addClass('on');
            $('#scene05 .read-button3').addClass('on');

        } else {
            $('#scene05 .text5').removeClass('on');
            $('#scene05 .read-button3').removeClass('on');
        }







        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});