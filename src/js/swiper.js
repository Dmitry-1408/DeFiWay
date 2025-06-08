"use strict";

/* const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3.5,
  centeredSlides: true, // центрирует активный слайд
  spaceBetween: 20,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
}); */

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: true, // разрешаем свайп
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    forceToAxis: true,
  },
});


const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  allowTouchMove: true, // разрешаем свайп
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    forceToAxis: true,
  },
});


