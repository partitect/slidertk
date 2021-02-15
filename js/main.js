$(function () {
  "use strict";
  var $slider = $(".bxslider");
  var activeClass = "active-one";

  $slider.bxSlider({
    mode: "fade",
    captions: false,
    pagerSelector: "",
    pagerCustom: ".bxNav",
    controls: false,
    easing: "linear",
    auto: true,
    pause: 3000,
    autoHover: true,
  });
});
