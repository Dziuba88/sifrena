$(document).ready(function () {
  var progressBar = $('<div class="owl-progress"><span style="animation-duration: 7000ms"></span></div>');

  $('.b__main--carousel .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M33.5 4l1 1-19.1 19 19.1 19-1 1-20-20 20-20z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M14.5 4l-1 1 19.1 19-19.1 19 1 1 20-20-20-20z"/></svg>'
    ],
    onInitialized: function () {
      $(this)[0].$element.append(progressBar);
    },
    onTranslate: function() {
      var $el = $(this)[0].$element.find('.owl-progress')
      $el.remove()
    },
    onTranslated: function () {
      $(this)[0].$element.append(progressBar);
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.to--top').show();
    } else {
      $('.to--top').hide();
    }
  });

  $('.to--top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });

  $('[data-mfp-type=inline]').magnificPopup({
    type: 'inline',
    showCloseBtn: false,
    closeMarkup: '<button data-mfp-close><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
  });

  $('[data-mfp-close]').click(function () {
    $.magnificPopup.close();
  });

});