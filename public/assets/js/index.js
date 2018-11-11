$(document).ready(function () {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: false });

  // move next carousel
  $('.slide-next').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
  });

  // move prev carousel
  $('.slide-prev').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
  });
});