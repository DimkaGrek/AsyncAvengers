import throttle from 'lodash.throttle';

import './header';
import './filter';
import './productList';
import './popular';
import './discount';
import './footer';
import './modal/modal';

// -----------------ScrollUp Button----------------------
const scrollUpButton = document.querySelector('.js-scroll-up-btn');
const heightSectionHero = document
  .querySelector('.js-hero-container')
  .getBoundingClientRect().height;
document.addEventListener(
  'scroll',
  throttle(() => {
    if (window.scrollY > heightSectionHero / 2) {
      return scrollUpButton.classList.add('show');
    }
    scrollUpButton.classList.remove('show');
  }, 500)
);
scrollUpButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});
// ==========================================================
