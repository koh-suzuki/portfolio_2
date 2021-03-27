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

  /* ハンバーガーメニューの開閉ボタン
  ------------------------------------------ */ 
  $('.menu').on('click',function(){
    $(this).toggleClass('close');
    $('.header__nav').fadeToggle(500);
    
    // ボタンクリック後、画面スクロールの使用を禁止
    $('body').toggleClass('noscroll');
  });
  /* --------------------------------------  */ 
    
});