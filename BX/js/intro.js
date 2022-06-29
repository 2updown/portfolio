
$(document).ready(function() {
    // Logic();

    $(document).mousemove(function(e) {
        $('#cursor').css('top', e.pageY - 10).css('left', e.pageX - 10);
    });

    $('#intro .pulse-button').on('click', function () {
        $('.intro-pop').fadeIn();
    });
});

