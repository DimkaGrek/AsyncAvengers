import icons from '../../img/icons.svg';
import { refsModal } from './modal';

import modalSuccessCardImg from '../../img/modal/modal-success-card-img.png';
import modalSuccessCardImg2x from '../../img/modal/modal-success-card-img@2x.png';
import modalThanksCardImg from '~/src/img/modal/modal-thanks-card-img.png';
import modalThanksCardImg2x from '~/src/img/modal/modal-thanks-card-img-@2x.png';
import modalErrorImg from '~/src/img/attention-for-food.png';

function modalProductCardMarkup(data) {
  const markup = `
  <button class="modal-close-btn" data-modal="product">
	  <svg class="modal-close-btn-img" width="13" height="13">
		<use href="${icons}#icon-close"></use>
	  </svg>
	</button>
  <div class="modal-product-card-content-wrapper">
	  <div class="modal-product-card-img-container">
		  <img
			  class="modal-product-card-img"
			  src="${data.img}"
			  alt="${data.name}"
		  />
	  </div>
	  <div class="modal-product-card-description wrapper scrollbar">
		  <h2 class="modal-product-card-title modal-card-title">${data.name}</h2>
		  <div class="modal-product-card-text-wrapper">
			  <p class="modal-product-card-category">Category:</p>
			  <p class="modal-product-card-category-descr">${data.category}</p>
			  <p class="modal-product-card-category">Size:</p>
			  <p class="modal-product-card-category-descr relocate">${data.size}</p>
			  
		  </div>
		  
		  <div class="modal-product-card-popularity-wrap">
		  <p class="modal-product-card-category relocate">Popularity:</p>
			  <p class="modal-product-card-category-descr">${data.popularity}</p>
		  </div>
		  
		  <p class="modal-product-card-descr modal-card-descr">
			  ${data.desc}
		  </p>
	  </div>
  </div>

  <div class="modal-product-card-purchase-wrapper">
	  <p class="modal-product-card-purchase-price">$${data.price}</p>
	  ${renderAddToButtonForModalProductCard(data._id)}
  </div>`;
  refsModal.modalProduct.innerHTML = markup;
}

function modalEmailSubMarkup() {
  const markup = `
	  <button class="modal-close-btn" data-modal="email-sub">
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
  refsModal.modalThanks.innerHTML = markup;
}

function modalEmailSubErrorMarkup() {
  const markupSubError = `<button class="modal-close-btn" data-modal="email-sub-error">
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
  refsModal.modalSub.innerHTML = markupSubError;
}

function modalSuccessMarkup() {
  const successMarkup = `<button class="modal-close-btn" data-modal="order">
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
	<use href="${icons}#icon-success-icon"></use>
</svg>
<h2 class="modal-success-card-title modal-card-title">Order success</h2>
<p class="modal-success-card-descr modal-card-descr">
	Thank you for shopping at Food Boutique. Your order has been received
	and is now being freshly prepared just for you! Get ready to indulge
	in nourishing goodness, delivered right to your doorstep. We're
	thrilled to be part of your journey to better health and happiness.
</p>`;
  refsModal.modalSuccess.innerHTML = successMarkup;
}
function modalErrorMarkup(title, message) {
  const errorMarkup = `<button class="modal-close-btn" data-modal="error">
	<svg class="modal-close-btn-img" width="13" height="13">
		<use href="${icons}#icon-close"></use>
	</svg>
</button>
<img
	class="modal-success-card-img"
	src="${modalErrorImg}"
	alt="attention"
	width="160"
	height="160"
/>
<h2 class="modal-success-card-title modal-card-title">${title}</h2>
<p class="modal-success-card-descr modal-card-descr modal-error-card-descr">
${message}
</p>`;
  refsModal.modalThanks.innerHTML = errorMarkup;
}

export function renderAddToButtonForModalProductCard(id) {
  const cart = localStorage.getItem('CART');
  const checked = `<button data-modalId="${id}" class="modal-product-card-purchase-btn" data-remove="remove">
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
  if (target.dataset.remove === 'remove') {
    target.innerHTML = `Add to<svg
		class="modal-product-card-purchase-btn-img"
		width="18"
		height="18"
	>
		<use href="${icons}#icon-shopping-cart"></use>
	</svg>`;
    target.dataset.remove = '';
    return;
  }
  target.innerHTML = `Remove from<svg
class="modal-product-card-purchase-btn-img"
width="18"
height="18"
>
<use href="${icons}#icon-shopping-cart"></use>
</svg>`;
  //   target.disabled = true;
  target.dataset.remove = 'remove';
}
export {
  modalProductCardMarkup,
  modalEmailSubMarkup,
  modalEmailSubErrorMarkup,
  changeAddToCartBtn,
  modalSuccessMarkup,
  modalErrorMarkup,
};
