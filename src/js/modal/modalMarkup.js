import icons from '../../img/icons.svg';
import { refsModal } from './modal';
import modalThanksCardImg from '../../img/modal/modal-thanks-card-img.png';
import modalThanksCardImg2x from '../../img/modal/modal-thanks-card-img-@2x.png';

export function modalProductCardMarkup(data) {
  const markup = `
	<button class="modal-close-btn">
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
		<div class="modal-product-card-description wrapper">
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
		<button data-modalId="${data._id}" class="modal-product-card-purchase-btn">
			Add to<svg
				class="modal-product-card-purchase-btn-img"
				width="18"
				height="18"
			>
				<use href="${icons}#icon-shopping-cart"></use>
			</svg>
		</button>
	</div>`;
  refsModal.modalProduct.innerHTML = markup;
}

export function modalEmailSubMarkup() {
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

export function modalEmailSubErrorMarkup() {
  refsModal.modalThanks.style.paddingTop = '80px';
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
