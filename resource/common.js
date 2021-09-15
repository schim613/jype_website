// 이미지 로딩 기다리기
$('body').imagesLoaded(function () {
  $('.loading-box').addClass('hide');
  SectionEffect__init();
});

// 배너-슬라이더
function SliderBox1__init() {
  const swiper = new Swiper('.slider-box-1 .swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-box-1 .swiper-button-next',
      prevEl: '.slider-box-1 .swiper-button-prev',
    }
  });
}

SliderBox1__init();


// 메인메뉴 호버시 서브메뉴 노출
$('.main-menu > li').mouseenter(function(){
  $(this).find('.sub-menu').stop().slideDown(300);
});
$('.main-menu > li').mouseleave(function(){
  $(this).find('.sub-menu').stop().slideUp(300);
});


// 유튜브 플레이리스트
function SliderBox2__init() {
  var swiper = new Swiper(".slider-box-2 .swiper-container", {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 5,
    navigation: {
      nextEl: ".play-list .play-list__btn-next",
      prevEl: ".play-list .play-list__btn-prev"
    }
  });
}

SliderBox2__init();