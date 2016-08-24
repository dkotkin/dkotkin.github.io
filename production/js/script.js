'use strict';

$(function() {

  $(".wrapper").load("home.html .container");

  var $check = true;
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

          $('.wrapper').load( $(this).attr('href') + ' .container' );
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
