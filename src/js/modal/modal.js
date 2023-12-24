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

// import { showModal, hideModal, activateCloseButton } from './modalCommon.js';

let isModalOpen = false;
import { refsModal } from './modalRefs.js';
const { backdrop, modalProduct, modalThanks } = refsModal;
console.log('backdrop: ', backdrop);

function showModal(element) {
  backdrop.style.display = 'flex';
  element.style.display = 'block';
}
function hideModal(element) {
  backdrop.style.display = 'none';
  element.style.display = 'none';
}
function activateCloseButton(ref, data) {
  console.log('my ref: ', ref);
  const closeBtn = document.querySelector(`[data-modal="${data}"]`);
  console.log('closeBtn before', closeBtn);
  if (closeBtn) {
    console.log('closeBtn', closeBtn);
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

      console.log('elemId: ', elemId);
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
  showModal(modalThanks);
  modalEmailSubErrorMarkup();
  activateCloseButton(closeModalEmailSubError, 'email-sub');
  isModalOpen = true;
  addEventListenerToEscape();
}
function closeModalEmailSubError() {
  console.log('closeModalEmailSubError');
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
  if (e.target === backdrop) {
    closeModalProductCard();
    closeModalEmailSub();
  }
});

function openModalSuccess() {
  showModal(refs.modalThanks);
  modalSuccessMarkup();
  activateCloseButton(closeModalSuccess, 'order');
  isModalOpen = true;
  addEventListenerToEscape();
}

function closeModalSuccess() {
  refs.form.reset();
  isEmpty(products?.length);
  hideModal(refs.modalThanks);
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
