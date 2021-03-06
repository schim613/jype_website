<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JYP ENTERTAINMENT</title>

  <!-- 제이쿼리 불러오기 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.min.js"></script>

  <!-- imagesloaded -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js"></script>

  <!-- 풀페이지 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css">

  <!-- 테일윈드 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.4/tailwind.min.css">
  <!-- 테일윈드 치트시트 : https://nerdcave.com/tailwind-cheat-sheet -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

  <!-- 스와이퍼 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.js">
  
  <!-- light box -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css">

  <!-- sticker -->
  <script src="resource/sticker.min.js"></script>

  <!-- 사이트 공통 JS -->
  <script src="resource/common.js" defer></script>

  <!-- 사이트 공통 CSS -->
  <link rel="stylesheet" href="resource/common.css">
</head>

<body class="<?=$pagecode == "home" ? "" : "bg__navy"?>">
  <header class="top-bar relative <?=$pagecode == "home" ? "" : "sub-page__top-bar"?>">
    <div class="wrap flex h-full">
      <a class="flex self-center cursor-pointer" href="index.ssg.php">
        <img src="resource/img/logo.png" alt="로고" class="logo">
        <img src="resource/img/logo.active.png" alt="로고" class="logo active">
      </a>

      <div class="flex-grow"></div>

      <ul class="main-menu h-full flex items-center">
        <li>
          <a href="#" class="block cursor-pointer">COMPANY</a>
          <ul class="sub-menu absolute">
            <li><a href="#" class="block cursor-pointer">ABOUT JYP</a></li>
            <li><a href="#" class="block cursor-pointer">HISTORY</a></li>
            <li><a href="#" class="block cursor-pointer">NOTICE</a></li>
            <li><a href="#" class="block cursor-pointer">RECRUIT</a></li>
            <li><a href="#" class="block cursor-pointer">CS</a></li>
            <li><a href="#" class="block cursor-pointer">IR</a></li>
            <li><a href="#" class="block cursor-pointer">CONTACT US</a></li>
          </ul>
        </li>
        <li>
          <a href="artist.ssg.php" class="block cursor-pointer">ARTIST</a>
        </li>
        <li>
          <a href="#" class="block cursor-pointer">AUDITION</a>
        </li>
      </ul>

      <div class="flex-grow"></div>

      <ul class="site-menu h-full flex items-center">
        <li>
          <a href="https://www.youtube.com/user/jypentertainment" target="_blank" class="cursor-pointer">
            <img src="resource/img/youtube.png" alt="유튜브">
            <img src="resource/img/youtube.active.png" alt="유튜브" class="active">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jypnation" target="_blank" class="cursor-pointer">
            <img src="resource/img/twitter.png" alt="트위터">
            <img src="resource/img/twitter.active.png" alt="트위터" class="active">
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/jypnation" target="_blank" class="cursor-pointer">
            <img src="resource/img/facebook.png" alt="페이스북">
            <img src="resource/img/facebook.active.png" alt="페이스북" class="active">
          </a>
        </li>
        <li>
          <a href="https://edm-wish.jype.com/" target="_blank" class="cursor-pointer">
            <img src="resource/img/edm.png" alt="EDM">
            <img src="resource/img/edm.active.png" alt="EDM" class="active">
          </a>
        </li>
      </ul>
    </div>
  </header>