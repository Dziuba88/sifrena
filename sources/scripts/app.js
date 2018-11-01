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
    fixedBgPos: true,
    callbacks: {
      beforeOpen: function() {
          $('html').css('overflow', 'hidden');
      },
      beforeClose: function() {
          $('html').css('overflow', 'auto');
      }
    }
  });

  $('[data-mfp-close]').click(function () {
    $.magnificPopup.close();
  });

  if ($('#map').length) {
    var map_location = [46.9893432, 28.8584635];
    var small_map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: new google.maps.LatLng(map_location[0], map_location[1]),
      disableDefaultUI: true
    });
    small_map_marker = new google.maps.Marker({
      position: new google.maps.LatLng(map_location[0], map_location[1]),
      map: small_map,
      icon: {
        url: "img/marker.png",
        scaledSize: new google.maps.Size(23, 33)
      }
    });
    small_map.addListener('center_changed', function () {
      window.setTimeout(function () {
        small_map.panTo(small_map_marker.getPosition());
      }, 100);
    });
  };

  function createGallery() {
    var gallery = $('[data-popup=gallery]');
    var links = gallery.find('.thumb');
    var items = [];
    console.log(links);

    links.each(function () {
      var link = $(this);
      var type = 'image';

      if (link.hasClass('video')) {
        type = 'iframe';
      };
      var item = {
        src: link.attr('data-mfp-src'),
        type: type,
        title: link.attr('title') + '<small>Image by Sifrena</small>'
      };

      items.push(item)
    });

    links.magnificPopup({
      mainClass: 'mfp-img-mobile',
      gallery: { enabled: true, navigateByImgClick: false },
      disabledOn: 0,
      items: items,
      callbacks: {
        beforeOpen: function () {
          $('html').css('overflow', 'hidden');
        },
        beforeClose: function () {
          $('html').css('overflow', 'auto');
        },
        buildControls: function () {
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        },
      }
    });
  };

  if ($('[data-popup=gallery]').length) {
    createGallery();
  };

  $('[data-toggle="active"]').click(function () {
    $(this).toggleClass('active')
  });

  $('.navbar--toggle').click(function () {
    $(this).toggleClass('active');
    $('.navbar--nav').toggleClass('open');
  });

});