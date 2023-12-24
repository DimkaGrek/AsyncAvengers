import { modalProductCardMarkup } from './modalMarkup.js';
import {
  modalEmailSubMarkup,
  modalEmailSubErrorMarkup,
  changeAddToCartBtn,
  modalSuccessMarkup,
  modalErrorMarkup,
} from './modalMarkup.js';
import { putProductListItemInCart, switchSameBtn } from '../tools.js';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

let isModalOpen = false;
import { refsModal } from './modalRefs.js';
const { backdrop, modalProduct, modalThanks, modalSuccess, modalSub } =
  refsModal;

function showModal(element) {
  backdrop.style.display = 'flex';
  element.style.display = 'block';
}
function hideModal(element) {
  backdrop.style.display = 'none';
  element.style.display = 'none';
}
function activateCloseButton(ref, data) {
  const closeBtn = document.querySelector(`[data-modal="${data}"]`);
  if (closeBtn) {
    closeBtn.addEventListener('click', ref);
  }
}
function closeModalProductCard() {
  hideModal(modalProduct);
  isModalOpen = false;
  removeEventListenerFromEscape();
}

function activateAddToCartButton() {
  const addToCartBtn = document.querySelector(
    '.modal-product-card-purchase-btn'
  );
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', e => {
      const elemId = e.currentTarget.dataset.modalid;

      switchSameBtn(elemId);

      putProductListItemInCart(elemId);
      changeAddToCartBtn(addToCartBtn);
    });
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
  const cardProductDescr = document.querySelector('.modal-product-card-descr');
  new SimpleBar(cardProductDescr, { autoHide: false });
  activateCloseButton(closeModalProductCard, 'product');
  activateAddToCartButton();
  isModalOpen = true;
  addEventListenerToEscape();
}

function openModalEmailSub() {
  showModal(modalThanks);
  modalEmailSubMarkup();
  activateCloseButton(closeModalEmailSub, 'email-sub');
  isModalOpen = true;
  addEventListenerToEscape();
}

function closeModalEmailSub() {
  hideModal(modalThanks);
  isModalOpen = false;
  removeEventListenerFromEscape();
}

function openModalEmailSubError() {
  showModal(modalSub);
  modalEmailSubErrorMarkup();
  activateCloseButton(closeModalEmailSubError, 'email-sub');
  isModalOpen = true;
  addEventListenerToEscape();
}
function closeModalEmailSubError() {
  hideModal(modalSub);
  isModalOpen = false;
  removeEventListenerFromEscape();
}

function openModalError(title, message) {
  showModal(modalThanks);
  modalErrorMarkup(title, message);
  activateCloseButton(closeModalError, 'error');
  isModalOpen = true;
  addEventListenerToEscape();
}
function closeModalError() {
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
  if (e.target === backdrop) {
    closeModalProductCard();
    closeModalEmailSub();
  }
});

function openModalSuccess() {
  showModal(modalSuccess);
  modalSuccessMarkup();
  activateCloseButton(closeModalSuccess, 'order');
  isModalOpen = true;
  addEventListenerToEscape();
}

function closeModalSuccess() {
  hideModal(modalSuccess);
  isModalOpen = false;
  removeEventListenerFromEscape();
}

export {
  refsModal,
  openModalProductCard,
  closeModalProductCard,
  openModalEmailSub,
  closeModalEmailSub,
  openModalEmailSubError,
  closeModalEmailSubError,
  openModalSuccess,
  closeModalSuccess,
  openModalError,
  closeModalError,
  handleEscapeKey,
  activateCloseButton,
};
