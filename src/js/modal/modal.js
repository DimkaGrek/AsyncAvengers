import { modalProductCardMarkup } from './modalMarkup.js';
import {
  modalEmailSubMarkup,
  modalEmailSubErrorMarkup,
  changeAddToCartBtn,
  modalSuccessMarkup,
  modalErrorMarkup,
} from './modalMarkup.js';
import { putProductListItemInCart, isCheckedCart } from '../productList.js';

const refsModal = {
  backdrop: document.querySelector('.modal-backdrop'),
  modalProduct: document.querySelector('.modal-product-card-container'),
  modalThanks: document.querySelector('.modal-thanks-card-container'),
  modalSub: document.querySelector('.js-modal-sub'),
  modalSuccess: document.querySelector('.js-modal-success'),
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
function activateAddToCartButton() {
  const addToCartBtn = document.querySelector(
    '.modal-product-card-purchase-btn'
  );
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', e => {
      const elemId = e.currentTarget.dataset.modalid;

      const btnElem = document.querySelector(`button[data-id="${elemId}"]`);
      if (btnElem) {
        isCheckedCart(btnElem);
      }

      const btnPopularElem = document.querySelector(
        `.popular-buy-btn[data-id="${elemId}"]`
      );
      if (btnPopularElem) {
        isCheckedCart(btnPopularElem);
      }

      const btnDiscountElem = document.querySelector(
        `.button-discount[data-id="${elemId}"]`
      );
      if (btnDiscountElem) {
        isCheckedCart(btnDiscountElem);
      }

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
  activateCloseButton();
  activateAddToCartButton();
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

function openModalError() {
  showModal(modalThanks);
  modalErrorMarkup();
  activateCloseButton();
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
  // openModalSuccess,
  // closeModalSuccess,
  openModalError,
  closeModalError,
  handleEscapeKey,
  activateCloseButton,
};
