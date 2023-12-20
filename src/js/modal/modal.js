const refsModal = {
  backdrop: document.querySelector('.modal-backdrop'),
  modals: document.querySelectorAll('.modal-container '),
  closeBtn: document.querySelector('.modal-close-btn'),
  modalProduct: document.querySelector('.modal-product-card-container'),
  modalThanks: document.querySelector('.js-modal-thanks'),
  modalSub: document.querySelector('.js-modal-sub'),
  modalSuccess: document.querySelector('.js-modal-success'),
  cartBtn: document.querySelector('.modal-product-card-purchase-btn'),
};

let isModalOpen = false;

function openModalProductCard() {
  refsModal.backdrop.style.display = 'flex';
  refsModal.modalProduct.style.display = 'block';
  isModalOpen = true;
  document.addEventListener('keydown', handleEscapeKey);
}

function closeModalProductCard() {
  refsModal.backdrop.style.display = 'none';
  refsModal.modalProduct.style.display = 'none';
  isModalOpen = false;
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && isModalOpen) {
    closeModalProductCard();
  }
}

refsModal.closeBtn.addEventListener('click', () => {
  closeModalProductCard();
});

refsModal.backdrop.addEventListener('click', () => {
  closeModalProductCard();
});

export {
  refsModal,
  openModalProductCard,
  closeModalProductCard,
  handleEscapeKey,
};
