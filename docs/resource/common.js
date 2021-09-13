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
      delay: 10000,
    },

    // If we need pagination
    pagination: {
      el: '.slider-box-1 .swiper-pagination',
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

// 사이트메뉴 호버시 컬러버전 노출
function SiteMenu__init(){
  $('.site-menu > li > a > img').mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
    return false
  });
  
  $('.site-menu > li > a > img').mouseleave(function(){
    $(this).removeClass("active").siblings().addClass("active");
    return false
  });
}

SiteMenu__init();

// 유튜브 플레이리스트
function SliderBox2__init() {
  var swiper = new Swiper(".slider-box-2 .swiper-container", {
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

SliderBox2__init();