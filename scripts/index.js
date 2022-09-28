// slider
import Swiper from '../lib/swiper-bundle.esm.browser.min.js'
new Swiper('.goods__block', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    }

  },
  navigation: {
    prevEl: '.goods__arrow_prev',
    nextEl: '.goods__arrow_next',
  },
  preventClicks: true,
  a11y: false,
})

// modal

const productMore = document.querySelectorAll('.product__more')

const modal = document.querySelector('.modal')


productMore.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('modal_open')
  })
})
modal.addEventListener('click', (e) => {
  if (e.target) {
    modal.classList.remove('modal_open')
  }
})