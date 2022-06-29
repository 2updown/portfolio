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


    var typingBool = false;
    var typingIdx=0;

// 타이핑될 텍스트를 가져온다
    var typingTxt = $(".typing-txt").text();

    typingTxt=typingTxt.split(""); // 한글자씩 자른다.

    if(typingBool==false){
        // 타이핑이 진행되지 않았다면
        typingBool=true;
        var tyInt = setInterval(typing,100); // 반복동작
    }


    function typing(){
        if(typingIdx<typingTxt.length){
            // 타이핑될 텍스트 길이만큼 반복
            $(".typing").append(typingTxt[typingIdx]);
            // 한글자씩 이어준다.
            typingIdx++;
        } else{
            //끝나면 반복종료
            clearInterval(tyInt);
        }
    }



    //슬릭슬라이더 화살표 버
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>", //이전 화살표
    //     nextArrow: "<button type='button' class='slick-next'>Next</button>",

    $("#scene04 .scene04-slide").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
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

    // $('#header').on('click',function () {
    //     $('#menu-pop').addClass('on');
    // });
    //
    // $('#menu-pop .close').on('click',function () {
    //     $('#menu-pop').removeClass('on');
    // });





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


        if (a >= 0) {
            $("#scene01 .title01").addClass('on');
            $("#scene01 .title02").addClass('on');
            $("#scene01 .title03").addClass('on');
            $("#scene01 .platform").addClass('on');
            $("#scene01 .appstore").addClass('on');
            $("#scene01 .google").addClass('on');

        } else {
            $("#scene01 .title01").removeClass('on');
            $("#scene01 .title02").removeClass('on');
            $("#scene01 .title03").removeClass('on');
            $("#scene01 .platform").removeClass('on');
            $("#scene01 .appstore").removeClass('on');
            $("#scene01 .google").removeClass('on');
        }

        if (a >= 150) {
            $('#scene02 .subtitle01').addClass('on');
            $('#scene02 .body01').addClass('on');

        } else {
            $('#scene02 .subtitle01').removeClass('on');
            $('#scene02 .body01').removeClass('on');

        }

        if (a >= 400) {
            $('#scene02 .about').addClass('on');
        } else {
            $('#scene02 .about').removeClass('on');
        }

        if (a >= 1100) {
            $('#scene03 .projectGoal').addClass('on');
            $('#scene03 .body02').addClass('on');
            $('#scene03 .body03').addClass('on');

        } else {
            $('#scene03 .projectGoal').removeClass('on');
            $('#scene03 .body02').removeClass('on');
            $('#scene03 .body03').removeClass('on');

        }

        if (a >= 1700) {
            $('#scene03 .ux').addClass('on');
            $('#scene03 .underline01').addClass('on');


        } else {
            $('#scene03 .ux').removeClass('on');
            $('#scene03 .underline01').removeClass('on');

        }

        if (a >= 1880) {
            $('#scene03 .ui').addClass('on');
            $('#scene03 .underline02').addClass('on');

        } else {
            $('#scene03 .ui').removeClass('on');
            $('#scene03 .underline02').removeClass('on');
        }




        if (a >= 2000) {
            $('#scene03 .goal01').addClass('on');
            $('#scene03 .goal02').addClass('on');
            $('#scene03 .goal03').addClass('on');


        } else {
            $('#scene03 .goal01').removeClass('on');
            $('#scene03 .goal02').removeClass('on');
            $('#scene03 .goal03').removeClass('on');
        }



        if (a >= 2450) {
            $('#scene03 .positioningMap').addClass('on');
            $('#scene03 .body04').addClass('on');

        } else {
            $('#scene03 .positioningMap').removeClass('on');
            $('#scene03 .body04').removeClass('on');

        }

        if (a >= 2800) {
            $('#scene03 .positioning').addClass('on');

        } else {
            $('#scene03 .positioning').removeClass('on');
        }

        if (a >= 3500) {
            $('#scene04 .persona').addClass('on');

        } else {
            $('#scene04 .persona').removeClass('on');
        }

        if (a >= 4650) {
            $('#scene04 .journeyMap').addClass('on');
            $('#scene04 .journeyBody').addClass('on');
            $('#scene04 .journeyBody2').addClass('on');

        } else {
            $('#scene04 .journeyMap').removeClass('on');
            $('#scene04 .journeyBody').removeClass('on');
            $('#scene04 .journeyBody2').removeClass('on');
        }

        if (a >= 5700) {
            $('#scene04 .flowChart').addClass('on');
            $('#scene04 .flowBody').addClass('on');
            $('#scene04 .flowBody2').addClass('on');

        } else {
            $('#scene04 .flowChart').removeClass('on');
            $('#scene04 .flowBody').removeClass('on');
            $('#scene04 .flowBody2').removeClass('on');

        }

        if (a >= 6900) {
            $('#scene05 .designSystem').addClass('on');

        } else {
            $('#scene05 .designSystem').removeClass('on');

        }

        if (a >= 13000) {
            $('#scene09 .icon1').addClass('on');
            $('#scene09 .icon2').addClass('on');
            $('#scene09 .icon3').addClass('on');
            $('#scene09 .icon4').addClass('on');
            $('#scene09 .icon5').addClass('on');
            $('#scene09 .icon6').addClass('on');
            $('#scene09 .icon7').addClass('on');
            $('#scene09 .icon8').addClass('on');

        } else {
            $('#scene09 .icon1').removeClass('on');
            $('#scene09 .icon2').removeClass('on');
            $('#scene09 .icon3').removeClass('on');
            $('#scene09 .icon4').removeClass('on');
            $('#scene09 .icon5').removeClass('on');
            $('#scene09 .icon6').removeClass('on');
            $('#scene09 .icon7').removeClass('on');
            $('#scene09 .icon8').removeClass('on');
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