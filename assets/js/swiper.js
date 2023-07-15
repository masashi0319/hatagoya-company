'use strict';

const swiper = new Swiper('.swiperBox__container', {
  loop: true,
  simulateTouch: false,
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    460: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1360: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4.5,
      spaceBetween: 40,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

const noneStopSwiper = new Swiper('.noneStopSwiper__container', {
  speed: 8000,
  loop: true,
  slidesPerView: 2.5,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    769: {
      slidesPerView: 3.5,
    },
    990: {
      slidesPerView: 4.5,
    },
    1440: {
      slidesPerView: 5.5,
    },
  },
});