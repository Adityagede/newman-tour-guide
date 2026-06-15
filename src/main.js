import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

AOS.init({
  duration: 800,
  once: true,
  offset: 80,
})

const tourSwiper = document.querySelector('.tour-swiper')

if (tourSwiper) {
  new Swiper('.tour-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.tour-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.tour-swiper-next',
      prevEl: '.tour-swiper-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
}