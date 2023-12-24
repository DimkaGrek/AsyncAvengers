import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
import { openModalProductCard, openModalError } from './modal/modal';
import { switchSameBtn, putProductListItemInCart } from './tools';

const discountList = document.querySelector('.js-product-discount');
const cardQuantity = document.querySelector('.js-cart-quantity');

function getRandomProducts(items, numb = 2) {
  const result = [...items].sort(() => 0.5 - Math.random());
  return result.slice(0, numb);
}

const getDiscountProductList = async () => {
  try {
    const products = await FoodApi.getDiscountProducts();
    let toRandomObject = [];
    if (products.length > 2) {
      toRandomObject = getRandomProducts(products);
    }
    renderDiscountList(toRandomObject);
  } catch (error) {
    openModalError(
      'Server Issue',
      `We're sorry, but it seems there's an issue with our server. Please try again later.`
    );
  }
};
getDiscountProductList();

function renderDiscountList(toRandomObject) {
  const markup = toRandomObject
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        is10PercentOff,
        popularity,
      }) => {
        return `   <li class="item-discount" data-id="${_id}">
      <div class="discount-image-container">
      <img src="${img}" alt="${category}" width="114" class="discout-image" loading="lazy"/>
      </div>
        <svg width=60 height=60 class="discount-icon">
          <use href="${icons}#icon-discount"></use>
        </svg>
        <div class="block-discount">
      <h3 class="tittle-product-discount">${name}</h3>
      <p class="discount-price">$${price}</p>
      ${renderButtonForProductList(_id)}
        </div>
    </li>`;
      }
    )
    .join('');
  discountList.innerHTML = markup;
  discountList.addEventListener('click', onListCartClick);
}

async function onListCartClick(event) {
  const button = event.target.closest('.button-discount');
  if (button !== null) {
    switchSameBtn(button.dataset.id);
    putProductListItemInCart(button.dataset.id);
    return;
  }
  const item = event.target.closest('.item-discount');
  if (item !== null) {
    try {
      const data = await FoodApi.getProductById(item.dataset.id);
      openModalProductCard(data);
    } catch (error) {
      openModalError(
        'Server Issue',
        `We're sorry, but it seems there's an issue with our server. Please try again later.`
      );
    }
  }
}

function renderButtonForProductList(id) {
  const cart = localStorage.getItem('CART');
  const cheked = `<button class="button-discount" data-id="${id}" aria-label="added to cart" disabled>
          <svg class="pbutton-svg-discount is-hidden" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
            <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>`;
  const uncheked = `<button class="button-discount" data-id="${id}" aria-label="button add to cart">
          <svg class="button-svg-discount" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>`;
  return cart.includes(id) ? cheked : uncheked;
}
