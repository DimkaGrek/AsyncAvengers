import throttle from 'lodash.throttle';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';
import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
import './footer';
import { spinnerPlay, spinnerStop } from './spinner';
import { openModalError, openModalSuccess } from './modal/modal';
const refsCart = {
  itemsList: document.querySelector('.js-items-list'),
  fullCart: document.querySelector('.js-container'),
  emptyCart: document.querySelector('.js-empty-cart'),
  quantityHeaderSpan: document.querySelector('.js-cart-quantity'),
  quantityTitle: document.querySelector('.js-quantity-span'),
  deleteAllButton: document.querySelector('.js-delete-all-btn'),
  totalSpan: document.querySelector('.js-total-price'),
  form: document.querySelector('.js-form-checkout'),
};

let products = [];
spinnerPlay();

products = loadFromLS('CART');

if (!isEmpty(products?.length)) {
  getProducts(products);

  refsCart.deleteAllButton.addEventListener('click', onClickDeleteAllButton);

  refsCart.itemsList.addEventListener('click', async event => {
    if (event.target.nodeName === 'UL') return;

    if (event.target.dataset.action === 'delete') {
      onClickDeleteButton(event);
    }

    if (
      event.target.dataset.action === 'increment' ||
      event.target.dataset.action === 'decrement'
    ) {
      onChangeAmountProducts(event, event.target.dataset.action);
    }
  });
}

refsCart.form.addEventListener('submit', handleSubmit);

function onClickDeleteAllButton() {
  localStorage.removeItem('CART');
  products = [];
  isEmpty(products?.length);
  spinnerStop();
}

function onClickDeleteButton(event) {
  const item = event.target.closest('LI');
  const id = item.dataset.id;
  const updateProducts = loadFromLS('CART');

  const filteredProducts = updateProducts.filter(elem => elem.productId !== id);

  item.remove();

  let totalPrice = 0;
  refsCart.allPricesofProducts = document.querySelectorAll(
    '.js-cart-product-price'
  );
  refsCart.allAmountOfProducts = document.querySelectorAll('.js-amount-span');
  totalPrice = filteredProducts.reduce((total, elem, i) => {
    return (
      total +
      Number(refsCart.allPricesofProducts[i].textContent.replace('$', '')) *
        Number(refsCart.allAmountOfProducts[i].textContent)
    );
  }, 0);

  refsCart.quantityTitle.textContent = `${filteredProducts.length}`;
  refsCart.quantityHeaderSpan.textContent = `${filteredProducts.length}`;
  refsCart.totalSpan.textContent = `$${totalPrice.toFixed(2)}`;

  saveToLS('CART', filteredProducts);
  isEmpty(filteredProducts?.length);
}

function onChangeAmountProducts(event, action) {
  const productPrice = Number(
    event.target
      .closest('.js-border-container')
      .previousElementSibling.lastElementChild.textContent.replace('$', '')
  );
  const quantityElement =
    event.target.closest('SPAN').firstElementChild.nextElementSibling;
  let value = Number(quantityElement.textContent);
  const id = event.target.closest('LI').dataset.id;

  if (action === 'decrement') {
    if (value === 1) return;
    value -= 1;
    refsCart.totalSpan.textContent =
      '$' +
      (
        Number(refsCart.totalSpan.textContent.replace('$', '')) - productPrice
      ).toFixed(2);
  }
  if (action === 'increment') {
    value += 1;
    refsCart.totalSpan.textContent =
      '$' +
      (
        Number(refsCart.totalSpan.textContent.replace('$', '')) + productPrice
      ).toFixed(2);
  }

  quantityElement.textContent = value;
  const productsList = loadFromLS('CART');
  const index = productsList.findIndex(elem => {
    return elem.productId === id;
  });
  productsList[index].amount = value;
  saveToLS('CART', productsList);
}

async function handleSubmit(event) {
  event.preventDefault();
  spinnerPlay();
  let email = '';
  const formData = new FormData(event.target);
  formData.forEach(value => {
    email = value;
  });
  const order = {};
  order.products = loadFromLS('CART');
  order.email = email;
  try {
    const { message } = await FoodApi.createOrder(order);
    spinnerStop();

    saveToLS('CART', []);
    products = [];
    openModalSuccess();
    refsCart.form.reset();
    isEmpty(products?.length);
  } catch (error) {
    openModalError();
    console.log(error);
  } finally {
    spinnerStop();
  }
}

async function getProducts(cartList) {
  try {
    if (!products) return;
    let totalPrice = 0;
    const productsList = cartList.map(async elem => {
      const response = await FoodApi.getProductById(elem.productId);
      return response;
    });
    const productItems = await Promise.all(productsList);
    totalPrice = productItems.reduce((total, elem) => {
      return total + elem.price;
    }, 0);
    const markup = createMarkup(productItems, cartList);
    refsCart.itemsList.innerHTML = markup;
    refsCart.quantityTitle.textContent = `${productItems.length}`;
    refsCart.totalSpan.textContent = `$${totalPrice.toFixed(2)}`;
    refsCart.quantityHeaderSpan.textContent = `${productItems.length}`;
    new SimpleBar(refsCart.itemsList, { autoHide: false });
  } catch (error) {
    console.log(error);
  } finally {
    spinnerStop();
  }
}

function createMarkup(items, amountItems) {
  return items
    .map(({ name, category, size, img, price, _id, is10PercentOff }, i) => {
      return `<li class="item-list" data-id="${_id}">
            <div class="cart-product-img-container">
              <img
                class="cart-product-img"
                src="${img}"
                alt="product"
                width="64"
                height="64"
              />
       ${renderDiscountForProductList(is10PercentOff)}
            </div>
            <div class="cart-product-container">
              <h3 class="cart-product-name">${name}</h3>
              <div class="cart-description-container">
                <p class="cart-product-description">
                  Category:
                  <span class="cart-product-description-accent"
                    >${category}</span
                  >
                </p>
                <p class="cart-product-description">
                  Size:
                  <span class="cart-product-description-accent">${size}</span>
                </p>
              </div>
              <p class="cart-product-price js-cart-product-price">$${price}</p>
            </div>

            <div class="border-container js-border-container">
              <div class="product-price-wrapper">
                <div class="quantity-span-container">
                  <span class="quantity-span">
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="decrement"
                    >
                      <svg class="cart-icon-minus" width="10" height="10" data-action="decrement">
                        <use href="${icons}#icon-minus" data-action="decrement"></use>
                      </svg></button
                    ><span class="js-amount-span">${
                      amountItems[i].amount
                    }</span>
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="increment"
                    >
                      <svg class="cart-icon-plus" width="14" height="14" data-action="increment">
                        <use href="${icons}#icon-plus" data-action="increment"></use>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <button class="delete-btn" type="button" data-action="delete">
              <svg class="cart-icon-delete" width="10" height="10" data-action="delete">
                <use href="${icons}#icon-close" class="icon" data-action="delete"></use>
              </svg>
            </button>
          </li>`;
    })
    .join('');
}

function renderDiscountForProductList(isDiscount) {
  const markup = `<svg class="cart-product-discount-icon" width="35" height="35">
          <use href="${icons}#icon-discount"></use>
        </svg> `;
  return isDiscount ? markup : '';
}

function isEmpty(items) {
  if (!items) {
    refsCart.fullCart.classList.add('is-hidden');
    refsCart.emptyCart.classList.remove('is-hidden');
    refsCart.quantityHeaderSpan.textContent = '0';
  } else {
    refsCart.emptyCart.classList.add('is-hidden');
    refsCart.fullCart.classList.remove('is-hidden');
  }
}
// Save to local storage
function saveToLS(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
// Load from local storage
function loadFromLS(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// -----------------ScrollUp Button----------------------
const scrollUpButton = document.querySelector('.js-scroll-up-btn');
document.addEventListener(
  'scroll',
  throttle(() => {
    if (window.scrollY > 200) {
      return scrollUpButton.classList.add('show');
    }
    scrollUpButton.classList.remove('show');
  }, 500)
);
scrollUpButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});
// ==========================================================
