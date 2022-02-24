$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $('#wapper-phone-menu').css("width", "1000px");
    });
    $("#closePhoneMenu").click(function () {
        $('#wapper-phone-menu').css("width", "0px");
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