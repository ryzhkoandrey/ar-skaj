'use strict';

// ---------- HEADER ----------

// menu

const menu = document.querySelector('[data-menu]');
const menuToggler = document.querySelector('[data-menu-toggler]');
const header = document.querySelector('[data-header]');
const body = document.querySelector('body');

if (menu && menuToggler && header) {
   menuToggler.addEventListener('click', () => {
      header.classList.toggle('header--active');
      menu.classList.toggle('header__menu--active');
      menuToggler.classList.toggle('header__menu-toggler--active');
      body.classList.toggle('no-scroll');
   });
} else {
   console.error('error: menu');
}

// ---------- NEWS ----------

// swiper

const newsSwiperElement = document.querySelector('[data-news-swiper]');

if (typeof Swiper !== 'undefined' && newsSwiperElement) {
   const newsSwiper = new Swiper(newsSwiperElement, {
      slidesPerView: 1,
      spaceBetween: 30,

      navigation: {
         prevEl: '[data-news-swiper-prev]',
         nextEl: '[data-news-swiper-next]',
      },

      pagination: {
         el: '[data-news-swiper-pagination]',
         clickable: true,
      },

      breakpoints: {
         1024: {
            slidesPerView: 3,
         },
         768: {
            slidesPerView: 2,
         },
      },
   });
} else {
   console.error('error: swiper');
}

// ---------- CONSULTATION ----------

// tel input mask

const telInput = document.querySelector('[data-tel-input]');

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
} else {
   console.error('error: tel input mask');
}