// 이미지 로딩 기다리기
$('body').imagesLoaded(function () {
  // 풀페이지
  new fullpage('#fullpage', {
    menu: ".top-bar .menu-1"
  });

  $('.loading-box').addClass('hide');
  SectionEffect__init();
});

// 로고 마우스엔터시 홈 표시
$('.logo').mouseenter(function () {
  $('.home').show();
});

$('.logo').mouseleave(function () {
  $('.home').hide();
});

// 기타-컴퓨터 클릭시 사진 표시
$('.ect-img-1').click(function () {
  $('.popup').show();
});

$('.popup').click(function () {
  $('.popup').hide();
});

// 연락-이메일 폼
function sendEmailForm(form) {
  if (form._replyto.value.length == 0) {
    alert('이메일 주소를 입력해주세요.');
    form._replyto.focus();
    return;
  }

  if (form.message.value.length == 0) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }

  form.submit();

  form._replyto.value = '';
  form.message.value = '';
  form.submit1.innerHTML = 'DONE!';
  form.submit1.disabled = true;
}

// 포트폴리오-마우스로 인한 흔들림 효과
const $window = $(window);

let windowWidth = $window.width();
let windowHeight = $window.height();

$window.resize(_.throttle(function () {
  windowWidth = $window.width();
  windowHeight = $window.height();
}, 100));

$window.resize(_.throttle(function () {
  MousemoveEffect1__update();
}, 100));

let MousemoveEffect1__$el = null;
let MousemoveEffect1__lastPosX = 0;
let MousemoveEffect1__lastPosY = 0;

function MousemoveEffect1__update() {
  MousemoveEffect1__$el.each(function (index, node) {
    const $node = $(node);
    const horRes = $node.data('data-mousemove-effect1-hor-res');
    const verRes = $node.data('data-mousemove-effect1-ver-res');

    const x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
    const y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
    $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');

    console.log("MousemoveEffect1__lastPosX : " + MousemoveEffect1__lastPosX);
    console.log("MousemoveEffect1__lastPosY : " + MousemoveEffect1__lastPosY);
  });
}

function MousemoveEffect1__init() {
  MousemoveEffect1__$el = $('.mousemove-effect-1-el');

  MousemoveEffect1__$el.each(function (index, node) {
    const $node = $(node);
    $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
    $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
  });

  const MousemoveEffect1__updateThrottled = _.throttle(function () {
    MousemoveEffect1__update();
  }, 10);

  $window.mousemove(function (e) {
    MousemoveEffect1__lastPosX = e.clientX;
    MousemoveEffect1__lastPosY = e.clientY;

    MousemoveEffect1__updateThrottled();
  });
}

MousemoveEffect1__init();

// 스티커 효과
window.onload = function () {
  Sticker.init('.sticker');
}