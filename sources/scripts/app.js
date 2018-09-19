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

  function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") != -1)
      base = base.substring(0, base.lastIndexOf("."));
    return base;

    ///<span>' + baseName(item.src) +'</span>
  }
  $('[data-popup=gallery]').magnificPopup({
    delegate: 'a.thumb',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {enabled: true,navigateByImgClick: false},
    callbacks: {
      buildControls: function () {
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Image by Sifrena</small>';
      }
    }
  });

  $('[data-toggle="active"]').click(function () {
    $(this).toggleClass('active')
  });

  $('.navbar--toggle').click(function () {
    $(this).toggleClass('active');
    $('.navbar--nav').toggleClass('open');
  });


});