'use strict';

$(function() {

  var $check = true;

  $('.navBtn').click(function() {
    var $arr = ['home', 'portfolio', 'about', 'contact'];

    if ($check) {
      var count = 0;
      return (
        $('.wrapper').append(
          $('<div>')
            .addClass('overlay')
            .append(
              $('<ul>')
                .addClass('navigation')
            )
        ),
        adding(),
        $('.overlay').append(
          $('<footer>')
           .append(
             $('<a href="mailto:kotkin.lg@gmail.com"></a>')
              .append(
                $('<p>')
                  .text('kotkin.lg@gmail.com')
              )
           )
        ),
        $('footer')
          .append(
            $('<span>Copyright <span>&copy</span> Kotkin Dmytro</span>')
          ),
        $check = false,
        $('.top').addClass('rotate-second'),
        $('.middle').addClass('rotate-first'),
        $('.bottom').addClass('rotate-third')
      );
    }

    return (
      $('.overlay').remove(),
      $('.top').removeClass('rotate-second'),
      $('.middle').removeClass('rotate-first'),
      $('.bottom').removeClass('rotate-third'),
      $check = true
    );

    function adding() {
      for (var i = 0, l = $arr.length; i < l; i++) {
        $('.navigation').append(
          $('<li>')
            .append(
              $('<a href="#/"></a>')
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
