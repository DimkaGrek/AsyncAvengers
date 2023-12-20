import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
import { openModalProductCard } from './modal/modal';

const refs = {
  productList: document.querySelector('.js-product-list'),
  cartQuantity: document.querySelector('.js-cart-quantity'),
};

localStorage.setItem('CART', JSON.stringify([]));
getProductList();

refs.productList.addEventListener('click', onListCartClick);

async function onListCartClick(event) {
  const button = event.target.closest('.product-button-cart');
  if (button !== null) {
    isCheckedCart(button);
    putProductListItemInCart(button.dataset.id);
    return;
  }
  const item = event.target.closest('.product-card');
  if (item !== null) {
    const data = await FoodApi.getProductById(item.dataset.id);
    openModalProductCard(data);
  }
}

async function getProductList() {
  try {
    const products = await FoodApi.getProducts();
    refs.productList.innerHTML = renderProductListMarcup(products);
  } catch (error) {
    console.log(error);
  }
}

function putProductListItemInCart(id) {
  const newCART = JSON.parse(localStorage.getItem('CART'));
  if (newCART.includes(id)) return;

  newCART.push(id);
  localStorage.setItem('CART', JSON.stringify(newCART));
  const value = +refs.cartQuantity.textContent;
  refs.cartQuantity.textContent = value + 1;
}

function isCheckedCart(ref) {
  ref.firstElementChild.classList.add('is-hidden');
  ref.lastElementChild.classList.remove('is-hidden');
  ref.disabled = true;
}

function renderProductListMarcup({ results }) {
  const marcup = results.map(
    ({ _id, name, img, category, price, size, is10PercentOff, popularity }) => {
      return `<li class="product-card" data-id="${_id}">
      <div class="product-img-wrapper">
        <img src="${img}" alt="${name}" width="140" />    
        ${renderDiscountForProductList(is10PercentOff)}
      </div>
      <h3 class="product-name">${name}</h3>
      <p class="product-description">
        <span>
          Category:
          <span class="product-description-accent">${category}</span>
        </span>
        <span>
          Size:
          <span class="product-description-accent">${size}</span>
        </span>
        <span>
          Popularity:
          <span class="product-description-accent">${popularity}</span>
        </span>
      </p>

      <div class="product-bye">
        <p class="product-prise">$${price}</p>
        <button class="product-button-cart" data-id="${_id}">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>
      </div>
    </li>`;
    }
  );
  return marcup.join('');
}

function renderDiscountForProductList(isDiscount) {
  const marcup = `<svg class="product-discount-card" width="60" height="60">
          <use href="/${icons}#icon-discount"></use>
        </svg> `;
  return isDiscount ? marcup : '';
}

export default putProductListItemInCart;
