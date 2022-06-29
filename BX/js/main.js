/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */


$(document).ready(function() {
    Logic();

    var scene = document.getElementById('section01');
    var parallax = new Parallax(scene);

    var scene = document.getElementById('section02');
    var parallax = new Parallax(scene);

    // $('#intro .pulse-button').on('click',function (){
    //     $('.intro-pop').fadeIn();
    // });
    //
    // $('.intro-pop .enter-box').on('click',function () {
    //     $('#intro').fadeOut(500);
    // });

    $(document).mousemove(function(e) {
        $('#cursor').css('top', e.pageY - 10).css('left', e.pageX - 10);
    });

    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active-1');
    });

    $('.menu-trigger').on('click',function () {
        $('#menu-trigger-section').toggleClass('on');
        if ($('.menu-trigger').hasClass('on')) {
            $('#menu-trigger-section').removeClass('on');
        } else {
        }
    });
    $('#menu-trigger-section .menu-escape > img:nth-child(2)').on('click',function () {
        $('#menu-trigger-section .menu-escape .menu-escape-bottom').slideToggle();
    });


    // var count = 0;//위치값 0에서 시작
    // $("#section02 .pull-hand > a").draggable({//해당 선택자를 드래그 하겠다
    //     axis: "y",//이동하고자 하는 축은 y축 (= x축은 사용 안하겠다)
    //     containment: '#section02 .pull-hand',//부모를 감싸서 드래그하는 선택자가 벗어나지 못하게 하겠다
    //     scroll: true,//스크롤 구동영역 설정
    //     cursor: "move",//마우스 모양 move로 변경
    //     drag: function () {
    //         count++;//드래그하면 숫자 증가
    //         if (count === 10) { //숫자가 10을 넘는다면 이렇게 event 발동하겠다
    //             $('.sc1-pop1').addClass('on');
    //         } else {
    //         }
    //     }
    // });


    $('#section02 .pull-hand').on('click',function () {
        $('.sc1-pop1').addClass('on');
    });

    $('.sc1-pop1 .close-btn').on('click',function () {
        $('.sc1-pop1').removeClass('on');
    });

    $('#section01 #button-frame').on('mouseenter',function () {
        $(this).addClass('on').children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
    });
    $('#section01 #button-frame').on('mouseleave',function () {
        $(this).removeClass('on').children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
    });

    $('#section01 #button-frame').on('click',function () {
        $('.sc1-pop2').fadeIn(500);
        $('.sc1-pop2 .typo1').addClass('on');
        $('.sc1-pop2 .pop2-type1').addClass('on');
        $('.sc1-pop2 .content1').addClass('on');
    });

    $('#menu-trigger-section .menu-about').on('click',function () {
        $('.sc1-pop4').fadeIn(500);
        $('.sc1-pop4 .typo1').addClass('on');
        $('.sc1-pop4 .about-type1').addClass('on');
        $('.sc1-pop4 .content1').addClass('on');
    });

    $('#menu-trigger-section .menu-escape > img:nth-child(1)').on('click',function () {
        $('.sc1-pop2').fadeIn(500);
        $('.sc1-pop2 .typo1').addClass('on');
        $('.sc1-pop2 .pop2-type1').addClass('on');
        $('.sc1-pop2 .content1').addClass('on');
    });

    $('#menu-trigger-section .menu-how').on('click',function () {
        $('.sc1-pop3').fadeIn(500);
        $('.sc1-pop3 .typo1').addClass('on');
        $('.sc1-pop3 .typo1-1').addClass('on');
        $('.sc1-pop3 .pop3-type1').addClass('on');
        $('.sc1-pop3 .pop3-type3').addClass('on');
        $('.sc1-pop3 .video').addClass('on');
        $('.sc1-pop3 .content1').addClass('on');
    });
    $('#menu-trigger-section .menu-where').on('click',function () {
        $('.sc1-pop5').fadeIn(500);
        $('.sc1-pop5 .typo1').addClass('on');
        $('.sc1-pop5 .where-type1').addClass('on');
        $('.sc1-pop5 .where-type3').addClass('on');
        $('.sc1-pop5 .content1').addClass('on');
    });

    $('.menu-escape-bottom > img:nth-child(1)').on('click',function () {
        $('#sc1_2-pop4').fadeIn(500);
        $('.sc1-pop4 .typo1').addClass('on');


    });
    $('.menu-escape-bottom > img:nth-child(2)').on('click',function () {
        $('#sc1_2-pop5').fadeIn(500);
    });
    $('.menu-escape-bottom > img:nth-child(3)').on('click',function () {
        $('#sc1_2-pop6').fadeIn(500);
    });


    //section02
    $('#section02 .treasure-box').on('click',function () {
        $('.sc1-pop2').fadeIn(500);
        $('.sc1-pop2 .typo1').addClass('on');
        $('.sc1-pop2 .pop2-type1').addClass('on');
        $('.sc1-pop2 .content1').addClass('on');

    });

    $('.sc1-pop2 .close-btn').on('click',function () {
        $('.sc1-pop2').fadeOut(500);
        $('.sc1-pop2 .typo1').removeClass('on');
        $('.sc1-pop2 .pop2-type1').removeClass('on');
        $('.sc1-pop2 .content1').removeClass('on');
    });

    $('#section02 .computer').on('click',function () {
        $('.sc1-pop3').fadeIn(500);
        $('.sc1-pop3 .typo1').addClass('on');
        $('.sc1-pop3 .typo1-1').addClass('on');
        $('.sc1-pop3 .pop3-type1').addClass('on');
        $('.sc1-pop3 .pop3-type3').addClass('on');
        $('.sc1-pop3 .video').addClass('on');
        $('.sc1-pop3 .content1').addClass('on');
    });

    $('.sc1-pop3 .close-btn').on('click',function () {
        $('.sc1-pop3').fadeOut(500);
        $('.sc1-pop3 .typo1').removeClass('on');
        $('.sc1-pop3 .typo1-1').removeClass('on');
        $('.sc1-pop3 .pop3-type1').removeClass('on');
        $('.sc1-pop3 .pop3-type3').removeClass('on');
        $('.sc1-pop3 .video').removeClass('on');
        $('.sc1-pop3 .content1').removeClass('on');
    });

    $('#section02 .main-book').on('click',function () {
        $('.sc1-pop4').fadeIn(500);
        $('.sc1-pop4 .typo1').addClass('on');
        $('.sc1-pop4 .about-type1').addClass('on');
        $('.sc1-pop4 .content1').addClass('on');
    });

    $('.sc1-pop4 .close-btn').on('click',function () {
        $('.sc1-pop4').fadeOut(500);
        $('.sc1-pop4 .typo1').removeClass('on');
        $('.sc1-pop4 .about-type1').removeClass('on');
        $('.sc1-pop4 .content1').removeClass('on');
    });

    $('#section02 .main02-frame').on('click',function () {
        $('.sc1-pop5').fadeIn(500);
        $('.sc1-pop5 .typo1').addClass('on');
        $('.sc1-pop5 .where-type1').addClass('on');
        $('.sc1-pop5 .where-type3').addClass('on');
        $('.sc1-pop5 .content1').addClass('on');
    });

    $('.sc1-pop5 .close-btn').on('click',function () {
        $('.sc1-pop5').fadeOut(500);
        $('.sc1-pop5 .typo1').removeClass('on');
        $('.sc1-pop5 .where-type1').removeClass('on');
        $('.sc1-pop5 .where-type3').removeClass('on');
        $('.sc1-pop5 .content1').removeClass('on');
    });

    //kidnapped 상세페이지
    $('.sc1-pop2 .kidnapped').on('click',function () {
        $('#sc1_2-pop4').fadeIn(500);
    });
    $('#sc1_2-pop4 .close-btn').on('click',function () {
        $('#sc1_2-pop4').fadeOut(500);
    });
    $('#sc1_2-pop4 .downloads').on('click',function () {
        $('#sc1_2-pop4-downloads').fadeIn(500);
    });
    $('#sc1_2-pop4 .walkThrough').on('click',function () {
        $('#sc1_2-pop4-walkthrough').fadeIn(500);
    });
    $('#sc1_2-pop4-walkthrough .story').on('click',function () {
        $('#sc1_2-pop4').fadeIn(500);
    });
    $('#sc1_2-pop4-walkthrough .story').on('click',function () {
        $('#sc1_2-pop4-walkthrough').fadeOut(500);
    });

    $('#sc1_2-pop4-walkthrough .close-btn').on('click',function () {
        $('#sc1_2-pop4-walkthrough,#sc1_2-pop4').fadeOut(500);
    });
    $('#sc1_2-pop4-walkthrough .downloads').on('click',function () {
        $('#sc1_2-pop4-downloads').fadeIn(500);
    });
    $('#sc1_2-pop4-downloads .story').on('click',function () {
        $('#sc1_2-pop4').fadeIn(500);
    });
    $('#sc1_2-pop4-downloads .story').on('click',function () {
        $('#sc1_2-pop4-downloads,#sc1_2-pop4-walkthrough').fadeOut(500);
    });
    $('#sc1_2-pop4-downloads .walkThrough').on('click',function () {
        $('#sc1_2-pop4-walkthrough').fadeIn(500);
    });
    $('#sc1_2-pop4-downloads .walkThrough').on('click',function () {
        $('#sc1_2-pop4-downloads,#sc1_2-pop4').fadeOut(500);
    });
    $('#sc1_2-pop4-downloads .close-btn').on('click',function () {
        $('#sc1_2-pop4-downloads,#sc1_2-pop4-walkthrough,#sc1_2-pop4').fadeOut(500);
    });


    //prison 상세페이지
    $('.sc1-pop2 .prison-island').on('click',function () {
        $('#sc1_2-pop5').fadeIn(500);
    });
    $('.sc1-pop2 .asylum').on('click',function () {
        $('#sc1_2-pop6').fadeIn(500);
    });
    $('#sc1_2-pop5 .close-btn').on('click',function () {
        $('#sc1_2-pop5').fadeOut(500);
    });

    $('#sc1_2-pop5 .downloads').on('click',function () {
        $('#sc1_2-pop5-downloads').fadeIn(500);
    });
    $('#sc1_2-pop5-downloads .story').on('click',function () {
        $('#sc1_2-pop5').fadeIn(500);
    });
    $('#sc1_2-pop5-downloads .story').on('click',function () {
        $('#sc1_2-pop5-downloads').fadeOut(500);
    });
    $('#sc1_2-pop5-downloads .walkThrough').on('click',function () {
        $('#sc1_2-pop5-walkthrough').fadeIn(500);
    });
    $('#sc1_2-pop5-downloads .walkThrough').on('click',function () {
        $('#sc1_2-pop5-downloads').fadeOut(500);
    });


    $('#sc1_2-pop5 .walkThrough').on('click',function () {
        $('#sc1_2-pop5-walkthrough').fadeIn(500);
    });
    $('#sc1_2-pop5-walkthrough .story').on('click',function () {
        $('#sc1_2-pop5').fadeIn(500);
    });
    $('#sc1_2-pop5-walkthrough .story').on('click',function () {
        $('#sc1_2-pop5-walkthrough').fadeOut(500);
    });
    $('#sc1_2-pop5-walkthrough .close-btn').on('click',function () {
        $('#sc1_2-pop5-walkthrough,#sc1_2-pop5 ').fadeOut(500);
    });

    $('#sc1_2-pop5-walkthrough .downloads').on('click',function () {
        $('#sc1_2-pop5-downloads').fadeIn(500);
    });
    $('#sc1_2-pop5-downloads .close-btn').on('click',function () {
        $('#sc1_2-pop5-downloads,#sc1_2-pop5-walkthrough,#sc1_2-pop5').fadeOut(500);
    });



    //asylum 상세페이지
    $('#sc1_2-pop6 .walkThrough').on('click',function () {
        $('#sc1_2-pop6-walkthrough').fadeIn(500);
    });
    $('#sc1_2-pop6 .downloads').on('click',function () {
        $('#sc1_2-pop6-downloads').fadeIn(500);
    });
    $('#sc1_2-pop6-walkthrough .downloads').on('click',function () {
        $('#sc1_2-pop6-downloads').fadeIn(500);
    });
    $('#sc1_2-pop6-downloads .walkThrough').on('click',function () {
        $('#sc1_2-pop6-walkthrough').fadeIn(500);
    });
    $('#sc1_2-pop6-downloads .walkThrough').on('click',function () {
        $('#sc1_2-pop6-downloads').fadeOut(500);
    });
    $('#sc1_2-pop6-walkthrough .story').on('click',function () {
        $('#sc1_2-pop6').fadeIn(500);
    });
    $('#sc1_2-pop6-walkthrough .story').on('click',function () {
        $('#sc1_2-pop6-walkthrough').fadeOut(500);
    });
    $('#sc1_2-pop6-downloads .story').on('click',function () {
        $('#sc1_2-pop6').fadeIn(500);
    });
    $('#sc1_2-pop6-downloads .story').on('click',function () {
        $('#sc1_2-pop6-downloads,#sc1_2-pop6-walkthrough').fadeOut(500);
    });







    $('#sc1_2-pop6 .close-btn').on('click',function () {
        $('#sc1_2-pop6').fadeOut(500);
    });

    $('#sc1_2-pop6-walkthrough .close-btn').on('click',function () {
        $('#sc1_2-pop6,#sc1_2-pop6-walkthrough,#sc1_2-pop6-downloads').fadeOut(500);
    });
    $('#sc1_2-pop6-downloads .close-btn').on('click',function () {
        $('#sc1_2-pop6,#sc1_2-pop6-walkthrough,#sc1_2-pop6-downloads').fadeOut(500);
    });




    // how to play event
    $('.sc1-pop3 .play-button').on('click',function () {
        $(this).fadeOut();
        $('.sc1-pop3 .pause-button').fadeIn();
        var pop3_video = document.querySelector('.video')
        pop3_video.play();
    });

    $('.sc1-pop3 .pause-button').on('click',function () {
        $(this).fadeOut();
        $('.sc1-pop3 .play-button').fadeIn();
        var pop3_video = document.querySelector('.video')
        pop3_video.pause();
    });





    // slide event
    // $('.slides').slidesjs({
    //     width:970,
    //     height:465,
    //     play: {
    //         active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
    //         interval: 3000, // 대기시간, 1000=1초,
    //         effect: "fade", // 효과, slide/fade
    //         auto: true, // 자동시작
    //         pauseOnHover: false, // 마우스 오버시 멈춤
    //         restartDelay: 2500 // 마우스 아웃시 재동작 시간
    //     },
    //     navigation: {// 이전/다음 버튼
    //         active: true, // 버튼 활성화/비활성화
    //         effect: "fade"
    //     },
    //     pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
    //         active: false,
    //         effect: "fade"
    //     },
    //     effect: { // 효과 옵션
    //         fade: {
    //             speed: 800
    //         },
    //         slide: {
    //             speed: 1600
    //         }
    //     }
    // });





    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true

            } else { // 01 = false

            }
            if(index ==2){// 02 = true
                $('.menu-trigger').fadeIn();
            }else{//02 = false

            }
            if(index ==3){// 03 = true

            }else{//02 = false

            }
            if(index ==4){// 04 = true

            }else{//02 = false

            }
            if(index ==5){// 05 = true

            }else{//02 = false

            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01
                $('.menu-trigger').hide();
                $('#menu-trigger-section').removeClass('on');
                $('.menu-trigger').removeClass('active-1');
            }

            if(index == 3 && direction == 'down'){//03 -> 04

            } else if(index == 3 && direction == 'up'){//03 -> 02

            }
            if(index == 4 && direction == 'down'){//04 -> 05

            } else if(index == 4 && direction == 'up'){//04 -> 03

            }
            if(index == 5 && direction == 'down'){//05 -> 06

            } else if(index == 5 && direction == 'up'){//05 -> 04

            }

        }
    });



});