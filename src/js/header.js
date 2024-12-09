import throttle from 'lodash.throttle';

const headerContainer = document.querySelector('.header-content');

window.addEventListener(
  'scroll',
  throttle(() => {
    if (window.scrollY > 0) {
      headerContainer.classList.add('header-shadow');
    } else {
      headerContainer.classList.remove('header-shadow');
    }
  }, 1000)
);
