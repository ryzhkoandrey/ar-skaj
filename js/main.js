'use strict';

// ---------- NEWS ----------

// Swiper

const swiper = new Swiper('#news-swiper', {
   slidesPerView: 3,
   spaceBetween: 30,

   navigation: {
      prevEl: ".swiper-btn-prev",
      nextEl: ".swiper-btn-next",
   },
});