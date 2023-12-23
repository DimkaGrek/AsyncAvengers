import { isEmpty, products } from '../cart';
// import { modalEmailSubMarkup, modalEmailSubErrorMarkup } from './modalMarkup';

const refs = {
  form: document.querySelector('.js-form-checkout'),
  backdrop: document.querySelector('.modal-backdrop'),
  modalThanks: document.querySelector('.modal-thanks-card-container'),
};

let isModalOpen = false;

refs.backdrop.addEventListener('click', e => {
  if (e.target === refs.backdrop) {
    closeModalSuccess();
  }
});

export function activateCloseButton() {
  const closeBtn = document.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModalSuccess);
  }
}

export function addEventListenerToEscape() {
  document.addEventListener('keydown', handleEscapeKey);
}
export function removeEventListenerFromEscape() {
  document.removeEventListener('keydown', handleEscapeKey);
}

export function handleEscapeKey(event) {
  if (event.key === 'Escape' && isModalOpen) {
    hideModal(refs.modalThanks);
  }
}

export function showModal(element) {
  refs.backdrop.style.display = 'flex';
  element.style.display = 'block';
}

export function hideModal(element) {
  refs.backdrop.style.display = 'none';
  element.style.display = 'none';
}
