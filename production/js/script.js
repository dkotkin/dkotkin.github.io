'use strict';

$(function() {

  $(".wrapper").load("home.html .container", function() {
    $('.wrapper').addClass('no');
    $('.container').animate({
      opacity: 1
    }, 500);
  });

  var $check = true,
      href = '';
  $('.navBtn').click(function() {
    var $arr = ['home', 'portfolio', 'about', 'contact'];

    if ($check) {
      var count = 0,
          $overlay = $('<div class="overlay"></div>'),
          $ul = $('<ul class="navigation"></ul>'),
          $footer = $('<footer></footer>');

      return (
        $footer.append(
          $('<a href="mailto:kotkin.lg@gmail.com"></a>')
           .append(
             $('<p>')
               .addClass('mail')
               .text('kotkin.lg@gmail.com')
            )
        ),
        $footer.append(
          $('<span class="rights">Copyright <span>&copy</span> Kotkin Dmytro</span>')
        ),

        adding(),

        $overlay.append($ul),
        $overlay.append($footer),
        $check = false,
        $overlay.hide().appendTo($('.wrapper')).fadeIn(300),

        $('.top').addClass('rotate-second'),
        $('.middle').addClass('rotate-first'),
        $('.bottom').addClass('rotate-third'),

        $('.navigation li a').click(function(e) {
          e.preventDefault();
          href = $(this).attr('href');

          if ( $(this).attr('href') === 'home.html' ) {
            $('.wrapper').addClass('no');
          } else {
            $('.wrapper').removeClass('no');
          }

          $('.top').removeClass('rotate-second');
          $('.middle').removeClass('rotate-first');
          $('.bottom').removeClass('rotate-third');
          $check = true;

          $('.wrapper').load( $(this).attr('href') + ' .container', function() {
            $('.container').attr( 'id', href.slice(0, href.indexOf(".")) );
            $('.container').animate({
              opacity: 1
            }, 500);
          });
        })
      );
    }

    return (
      $('.overlay').fadeOut(300, function() {
        $('.overlay').remove();
      }),
      $('.top').removeClass('rotate-second'),
      $('.middle').removeClass('rotate-first'),
      $('.bottom').removeClass('rotate-third'),
      $check = true
    );

    function adding() {
      for (var i = 0, l = $arr.length; i < l; i++) {
        $ul.append(
          $('<li>')
            .append(
              $('<a href="' + $arr[i] + '.html"></a>')
                .addClass($arr[i])
                .append(
                  $('<p>')
                    .text($arr[i])
                )
            )
        );
      }
    }

  });

});
