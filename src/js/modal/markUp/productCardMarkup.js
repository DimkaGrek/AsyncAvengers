import icons from '~/src/img/icons.svg';
import { renderAddToButtonForModalProductCard } from '../modalMarkup.js';

export const productCardMarkup = data => {
  return `
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
		${renderAddToButtonForModalProductCard(data._id)}
	</div>`;
};
