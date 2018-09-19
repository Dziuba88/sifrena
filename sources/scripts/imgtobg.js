var $item = $('[data-plugin=img-to-bg]')

$.each($item , function () {
  var cssValues = {
    "background": "url(" + $(this).attr("data-src") + ") no-repeat center center scroll",
    "background-size": "cover"
  };
  $(this).css(cssValues);
});