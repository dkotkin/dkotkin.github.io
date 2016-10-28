$(function () {

    // Header behavior
    var headerHeight = $('header').height(),
        $header = $('header');

    $(window).scroll(function() {
        var pixels = $(window).scrollTop();

        if (pixels > headerHeight) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
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

    // Anchor links
    $('.sideNavigation a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 48
                }, 1000);
                clearMenuWidth();
                return false;
            }
        }
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