import './sass/main.scss';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/swiper-bundle.esm.js';

window.swiper = new Swiper({
  el: '.swiper',
  speed: 300,
  slidesPerView: 1,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'comments__slider-element',
    bulletActiveClass: 'comments__slider-element--active',
  },
});
