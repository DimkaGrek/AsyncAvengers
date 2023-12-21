import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
import { openModalProductCard } from './modal/modal';

const discountList = document.querySelector('.js-product-discount');
const cardQuantity = document.querySelector('.js-cart-quantity');

discountList.addEventListener('click', onListCartClick);
function getRandomProducts(items, numb = 2) {
  let arrayProducts = [];
  let indexEs = [];
  while (indexEs.length < numb) {
    let index = Math.floor(Math.random() * items.length);
    indexEs.push(index);
  }
  indexEs.forEach(index => !arrayProducts.push(items[index]));
  return arrayProducts;
}

const getDiscountProductList = async () => {
  const products = await FoodApi.getDiscountProducts();
  console.log('my get discount:', products);
  let toRandomObject = [];
  if (products.length > 2) {
    toRandomObject = getRandomProducts(products);
  }
  renderDiscountList(toRandomObject);
};
getDiscountProductList();

async function renderDiscountList(toRandomObject) {
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
      <img src="${img}" alt="${category}" width="114" class="discout-image"/>
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
localStorage.setItem('CART', JSON.stringify([]));

function isCheckedCart(ref) {
  ref.firstElementChild.classList.add('is-hidden');
  ref.lastElementChild.classList.remove('is-hidden');
  ref.disabled = true;
}

async function onListCartClick(event) {
  const button = event.target.closest('.button-discount');
  if (button !== null) {
    isCheckedCart(button);
    putProductListItemInCart(button.dataset.id);
    return;
  }
  const item = event.target.closest('.item-discount');
  console.log(item);
  if (item !== null) {
    try {
      const data = await FoodApi.getProductById(item.dataset.id);
      openModalProductCard(data);
    } catch (error) {
      console.log(error);
    }
  }
}
function putProductListItemInCart(id) {
  const newCART = JSON.parse(localStorage.getItem('CART'));
  if (newCART.includes(id)) return;

  newCART.push(id);
  localStorage.setItem('CART', JSON.stringify(newCART));
  const value = cardQuantity.textContent;
  cardQuantity.textContent = Number(value) + 1;
}

function renderButtonForProductList(id) {
  const cart = localStorage.getItem('CART');
  const cheked = `<button class="button-discount" data-id="${id} disabled">
          <svg class="pbutton-svg-discount is-hidden" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
            <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>`;
  const uncheked = `<button class="button-discount" data-id="${id}">
          <svg class="button-svg-discount" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>`;
  return cart.includes(id) ? cheked : uncheked;
}
