import { modalProductCardMarkup } from './modalMarkup.js';
import {
  modalEmailSubMarkup,
  modalEmailSubErrorMarkup,
} from './modalMarkup.js';

const refsModal = {
  backdrop: document.querySelector('.modal-backdrop'),
  modals: document.querySelectorAll('.modal-container'),
  closeBtn: document.querySelector('.modal-close-btn'),
  modalProduct: document.querySelector('.modal-product-card-container'),
  modalThanks: document.querySelector('.modal-thanks-card-container'),
  modalSub: document.querySelector('.js-modal-sub'),
  modalSuccess: document.querySelector('.js-modal-success'),
  cartBtn: document.querySelector('.modal-product-card-purchase-btn'),
};
const { backdrop, modalProduct, modalThanks } = refsModal;

let isModalOpen = false;

function showModal(element) {
  backdrop.style.display = 'flex';
  element.style.display = 'block';
}
function hideModal(element) {
  backdrop.style.display = 'none';
  element.style.display = 'none';
}
function activateCloseButton() {
  const closeBtn = document.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModalProductCard);
  }
}
function addEventListenerToEscape() {
  document.addEventListener('keydown', handleEscapeKey);
}
function removeEventListenerFromEscape() {
  document.removeEventListener('keydown', handleEscapeKey);
}

function openModalProductCard(data) {
  showModal(modalProduct);
  modalProductCardMarkup(data);
  activateCloseButton();
  isModalOpen = true;
  addEventListenerToEscape();
}

function closeModalProductCard() {
  hideModal(modalProduct);
  isModalOpen = false;
  removeEventListenerFromEscape();
}

function openModalEmailSub() {
  showModal(modalThanks);
  modalEmailSubMarkup();
  activateCloseButton();
  isModalOpen = true;
  addEventListenerToEscape();
}
function closeModalEmailSub() {
  hideModal(modalThanks);
  isModalOpen = false;
  removeEventListenerFromEscape();
}
function openModalEmailSubError() {
  showModal(modalThanks);
  modalEmailSubErrorMarkup();
  activateCloseButton();
  isModalOpen = true;
  addEventListenerToEscape();
}
function closeModalEmailSubError() {
  hideModal(modalThanks);
  isModalOpen = false;
  removeEventListenerFromEscape();
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && isModalOpen) {
    closeModalProductCard();
    closeModalEmailSub();
  }
}

backdrop.addEventListener('click', e => {
  if (e.target === refsModal.backdrop) {
    closeModalProductCard();
    closeModalEmailSub();
  }
});

export {
  refsModal,
  openModalProductCard,
  closeModalProductCard,
  openModalEmailSub,
  closeModalEmailSub,
  openModalEmailSubError,
  closeModalEmailSubError,
  handleEscapeKey,
};
