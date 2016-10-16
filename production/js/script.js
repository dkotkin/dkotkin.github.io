$(function () {

    // Header behavior
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 100 ){
            return $('header').addClass("sticky");
        }
            return $('header').removeClass("sticky");
    });

    $('body').append($('<div class="overlay" onclick="clearMenuWidth()"></div>'));

    // Menu button
    $('.navBtn').click(function () {
        $(this).toggleClass("change");

        // Check device screen width
        var mq = window.matchMedia( "(max-width: 700px)" );

        if (mq.matches) {
            // Navigation menu
            if (!$('header').hasClass('heading')) {
                $('.sideNavigation').addClass('slideWidth');
                $('header').addClass('heading');
                $('.overlay').fadeIn(500);
                $('body').css('overflow-y', 'hidden');
            } else {
                $('.sideNavigation').removeClass('slideWidth');
                $('header').removeClass('heading');
                $('.overlay').fadeOut(500);
                $('body').css('overflow-y', 'auto');
            }
        } else {
            // Navigation menu
            if (!$('.parallax').hasClass('mooove')) {
                $('.sideNavigation').addClass('slideWidth');
                $('.overlay').fadeIn(500);
                $(".parallax, .wrapper, footer").addClass('mooove');
                $('header').addClass('heading');
                $('body').css('overflow-y', 'hidden');
            } else {
                $('.sideNavigation').removeClass('slideWidth');
                $('.overlay').fadeOut(500);
                $(".parallax, .wrapper, footer").removeClass('mooove');
                $('header').removeClass('heading');
                $('body').css('overflow-y', 'auto');
            }
        }


    });

    // // Check device screen width
    // var mqmin = window.matchMedia( "(max-width: 600px)" ),
    //     mq = window.matchMedia( "(min-width: 700px)" ),
    //     mql = window.matchMedia("(orientation: portrait)");
    //
    // // Add a media query change listener
    // mqmin.addListener(function(m) {
    //     if (m.matches && mql.matches && $('.sideNavigation').hasClass('slideWidth')) {
    //             // Changed to portrait
    //             $(".parallax, .wrapper, footer").removeClass('mooove');
    //
    //     } else  if (m.matches && $('.sideNavigation').hasClass('slideWidth')) {
    //         // Changed to landscape
    //         $(".parallax, .wrapper, footer").addClass('mooove');
    //     }
    // });
    // mq.addListener(function (m) {
    //    if (m.matches && $('.sideNavigation').hasClass('slideWidth')) {
    //        // Changed to landscape
    //        $(".parallax, .wrapper, footer").addClass('mooove');
    //    }
    // });

    // Anchor links
    var $root = $('html, body');
    $('.sideNavigation a').click(function(e){
        e.preventDefault();
        $root.stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 48
        }, 700);
        clearMenuWidth();
        return false;
    });

});

function clearMenuWidth() {
    $('.navBtn').toggleClass('change');
    $('.sideNavigation').removeClass('slideWidth');
    $('.overlay').fadeOut(500);
    $(".parallax, .wrapper, footer").removeClass('mooove');
    $('header').removeClass('heading');
    $('body').css('overflow-y', 'auto');
}