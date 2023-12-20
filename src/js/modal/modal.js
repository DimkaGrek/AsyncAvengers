import { modalProductCardMarkup } from './modalMarkup.js';

const refsModal = {
  backdrop: document.querySelector('.modal-backdrop'),
  modals: document.querySelectorAll('.modal-container'),
  closeBtn: document.querySelector('.modal-close-btn'),
  modalProduct: document.querySelector('.modal-product-card-container'),
  modalThanks: document.querySelector('.js-modal-thanks'),
  modalSub: document.querySelector('.js-modal-sub'),
  modalSuccess: document.querySelector('.js-modal-success'),
  cartBtn: document.querySelector('.modal-product-card-purchase-btn'),
};
const { backdrop, modalProduct } = refsModal;

let isModalOpen = false;

function openModalProductCard(data) {
  backdrop.style.display = 'flex';
  modalProduct.style.display = 'block';
  modalProductCardMarkup(data);
  const closeBtn = document.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModalProductCard);
  }
  isModalOpen = true;
  document.addEventListener('keydown', handleEscapeKey);
}

function closeModalProductCard() {
  backdrop.style.display = 'none';
  modalProduct.style.display = 'none';
  isModalOpen = false;
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && isModalOpen) {
    closeModalProductCard();
  }
}

backdrop.addEventListener('click', e => {
  if (e.target === refsModal.backdrop) {
    closeModalProductCard();
  }
});

export {
  refsModal,
  openModalProductCard,
  closeModalProductCard,
  handleEscapeKey,
};
