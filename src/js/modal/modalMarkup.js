import icons from '../../img/icons.svg';
import { refsModal } from './modal';

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
		<button class="modal-product-card-purchase-btn">
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
