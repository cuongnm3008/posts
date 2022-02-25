$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $('#wapper-phone-menu').attr('style', 'width: 450px ');
    });
    $("#closePhoneMenu").click(function () {
        $('#wapper-phone-menu').attr('style', 'width: 0px ');
    });
});

// Back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    });
});

$('#backTop').click(function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
})