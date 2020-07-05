$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.works__slider').slick({
    arrows: false,
    autoplay: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    rows: 2,
    slidesPerRow: 5,
    infinite: true,
    speed: 1000,
  });
  $('.people__slider-text').slick({
    arrows: false,
    asNavFor: ".people__slider-img",
    touchMove: false,
    fade: true,
    waitForAnimate: false
  });
  $('.people__slider-img').slick({
    centerMode: true,
    centerPadding: '14px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    asNavFor: ".people__slider-text",
    waitForAnimate: false
  });
  $('.fa-bars').on('click', function () {
    $('.menu__block').slideToggle();
  });
});