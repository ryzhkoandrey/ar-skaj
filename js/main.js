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

// --------------- CONSULTATION --------------- //

// Tel input mask

const telInput = document.querySelector('#tel-input');

if (telInput) {

   telInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.startsWith('7')) value = value.slice(1);

      let formatted = '+7 ';
      if (value.length > 0) formatted += value.substring(0, 3);
      if (value.length > 3) formatted += ' ' + value.substring(3, 6);
      if (value.length > 6) formatted += '-' + value.substring(6, 8);
      if (value.length > 8) formatted += '-' + value.substring(8, 10);

      e.target.value = formatted;
   });
}