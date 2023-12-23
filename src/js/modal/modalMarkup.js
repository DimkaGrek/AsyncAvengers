import icons from '../../img/icons.svg';
import { refsModal } from './modal';
import modalThanksCardImg from '../../img/modal/modal-thanks-card-img.png';
import modalThanksCardImg2x from '../../img/modal/modal-thanks-card-img-@2x.png';
import modalSuccessCardImg from '../../img/modal/modal-success-card-img.png';
import modalSuccessCardImg2x from '../../img/modal/modal-success-card-img@2x.png';

import productCardMarkup from './markUp/productCardMarkup.js';

function modalProductCardMarkup(data) {
  console.log('kuku');
  refsModal.modalProduct.innerHTML = productCardMarkup(data);
}

function modalEmailSubMarkup() {
  const markupSub = `
	<button class="modal-close-btn">
        <svg class="modal-close-btn-img" width="13" height="13">
				<use href="${icons}#icon-close"></use>
        </svg>
      </button>
      <div class="modal-thanks-card-text-wrapper">
        <h2 class="modal-thanks-card-title modal-card-title">
          Thanks for subscribing for
          <span class="modal-card-span">new</span> products
        </h2>
        <p class="modal-thanks-card-descr modal-card-descr">
          We promise you organic and high-quality products that will meet your
          expectations. Please stay with us and we promise you many pleasant
          surprises.
        </p>
      </div>
      <div class="modal-thanks-card-img-wrap">
        <img
          class="modal-thanks-card-img"
          srcset="${modalThanksCardImg} 1x, ${modalThanksCardImg2x} 2x"
          src="${modalThanksCardImg}"
          alt="fruit busket"
          width="335"
          height="144"
        />
      </div>`;
  refsModal.modalThanks.innerHTML = markupSub;
}

function modalEmailSubErrorMarkup() {
  // refsModal.modalThanks.style.paddingTop = '80px';
  const markupSubError = `<button class="modal-close-btn">
	<svg class="modal-close-btn-img" width="13" height="13">
	<use href="${icons}#icon-close"></use>
	</svg>
</button>
<h2 class="modal-sub-card-title modal-card-title">
	This
	<span class="modal-card-span">email address</span> has already been
	entered
</h2>
<p class="modal-sub-card-descr modal-card-descr">
	You have already subscribed to our new products. Watch for offers at the
	mailing address.
</p>`;
  refsModal.modalThanks.innerHTML = markupSubError;
}

function modalSuccessMarkup() {
  const successMarkup = `<button class="modal-close-btn">
	<svg class="modal-close-btn-img" width="13" height="13">
		<use href="${icons}#icon-close"></use>
	</svg>
</button>
<img
	class="modal-success-card-img"
	srcset="${modalSuccessCardImg} 1x, ${modalSuccessCardImg2x} 2x"
          src="${modalSuccessCardImg}"
	alt="fruit"
	width="140"
	height="140"
/>
<svg class="modal-success-icon" width="185" height="68">
	<use href="./img/icons.svg#icon-success-icon"></use>
</svg>
<h2 class="modal-success-card-title modal-card-title">Order success</h2>
<p class="modal-success-card-descr modal-card-descr">
	Thank you for shopping at Food Boutique. Your order has been received
	and is now being freshly prepared just for you! Get ready to indulge
	in nourishing goodness, delivered right to your doorstep. We're
	thrilled to be part of your journey to better health and happiness.
</p>`;
  refsModal.modalThanks.innerHTML = successMarkup;
}
function modalErrorMarkup() {
  const errorMarkup = `<button class="modal-close-btn">
	<svg class="modal-close-btn-img" width="13" height="13">
		<use href="${icons}#icon-close"></use>
	</svg>
</button>
<h2 class="modal-success-card-title modal-card-title">Server Issue</h2>
<p class="modal-success-card-descr modal-card-descr">
We're sorry, but it seems there's an issue with our server. Please try again later.
</p>`;
  refsModal.modalThanks.innerHTML = errorMarkup;
}

export function renderAddToButtonForModalProductCard(id) {
  const cart = localStorage.getItem('CART');
  const checked = `<button disabled data-modalId="${id}" class="modal-product-card-purchase-btn">
	Remove from<svg
		class="modal-product-card-purchase-btn-img"
		width="18"
		height="18"
	>
		<use href="${icons}#icon-shopping-cart"></use>
	</svg>
</button>`;

  const unchecked = `<button data-modalId="${id}" class="modal-product-card-purchase-btn">
	Add to<svg
		class="modal-product-card-purchase-btn-img"
		width="18"
		height="18"
	>
		<use href="${icons}#icon-shopping-cart"></use>
	</svg>
</button>`;
  return cart.includes(id) ? checked : unchecked;
}

function changeAddToCartBtn(target) {
  target.innerHTML = `Remove from<svg
class="modal-product-card-purchase-btn-img"
width="18"
height="18"
>
<use href="${icons}#icon-shopping-cart"></use>
</svg>`;
  target.disabled = true;
}
export {
  modalProductCardMarkup,
  modalEmailSubMarkup,
  modalEmailSubErrorMarkup,
  changeAddToCartBtn,
  modalSuccessMarkup,
  modalErrorMarkup,
};
