'use strict';

// --------------- NEWS --------------- //

// Swiper

const newsSwiper = new Swiper('#news-swiper', {
   slidesPerView: 1,
   spaceBetween: 30,

   navigation: {
      prevEl: "#news-swiper-prev",
      nextEl: "#news-swiper-next",
   },

   pagination: {
      el: "#news-swiper-pagination",
      clickable: true,
   },

   breakpoints: {
      1024: {
         slidesPerView: 3,
      },
   },
});