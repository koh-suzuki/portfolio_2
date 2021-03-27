$(function() {
  var target = $("main");
  var el = target.offset().top;
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > el) {
      $(".header__wrapper").addClass("js__scroll__head");
    } else {
      $(".header__wrapper").removeClass("js__scroll__head");
    }
  });

  $('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });
    
});