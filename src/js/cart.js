import throttle from 'lodash.throttle';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';
import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
const refs = {
  itemsList: document.querySelector('.js-items-list'),
  fullCart: document.querySelector('.js-container'),
  emptyCart: document.querySelector('.js-empty-cart'),
  quantityHeaderSpan: document.querySelector('.js-cart-quantity'),
  quantityTitle: document.querySelector('.js-quantity-span'),
  deleteAllButton: document.querySelector('.js-delete-all-btn'),
  totalSpan: document.querySelector('.js-total-price'),
};
let productsId = loadFromLS('CART');
if (!isEmpty(productsId?.length)) {
  getProducts();
}

refs.deleteAllButton.addEventListener('click', () => {
  localStorage.removeItem('CART');
  productsId = [];
  isEmpty(productsId?.length);
  refs.quantityTitle.textContent = '0';
  refs.quantityHeaderSpan.textContent = '0';
  refs.itemsList.innerHTML = '';
  refs.totalSpan.textContent = '$0';
});

refs.itemsList.addEventListener('click', async event => {
  if (event.target.nodeName === 'UL') return;

  if (event.target.dataset.action === 'delete') {
    const item = event.target.closest('LI');
    const id = item.dataset.id;
    productsId = loadFromLS('CART');
    const filteredId = productsId.filter(elem => elem !== id);
    item.remove();

    try {
      let totalPrice = 0;
      const products = filteredId.map(async id => {
        const response = await FoodApi.getProductById(id);
        return response;
      });
      const productItems = await Promise.all(products);
      const allPricesOfProducts = document.querySelectorAll('.js-amount-span');
      totalPrice = productItems.reduce((total, elem, i) => {
        return total + elem.price * Number(allPricesOfProducts[i].textContent);
      }, 0);
      refs.quantityTitle.textContent = `${productItems.length}`;
      refs.quantityHeaderSpan.textContent = `${productItems.length}`;
      refs.totalSpan.textContent = `$${totalPrice.toFixed(2)}`;
      saveToLS('CART', filteredId);
      isEmpty(filteredId?.length);
    } catch (error) {
      console.log(error);
    }
  }

  if (event.target.dataset.action === 'decrement') {
    const productPrice = Number(
      event.target
        .closest('.js-border-container')
        .previousElementSibling.lastElementChild.textContent.replace('$', '')
    );
    const quantityElement =
      event.target.closest('SPAN').firstElementChild.nextElementSibling;
    let value = Number(quantityElement.textContent);
    if (value === 1) return;
    value -= 1;
    refs.totalSpan.textContent =
      '$' +
      (
        Number(refs.totalSpan.textContent.replace('$', '')) - productPrice
      ).toFixed(2);
    quantityElement.textContent = value;
  }

  if (event.target.dataset.action === 'increment') {
    const productPrice = Number(
      event.target
        .closest('.js-border-container')
        .previousElementSibling.lastElementChild.textContent.replace('$', '')
    );
    const quantityElement =
      event.target.closest('SPAN').firstElementChild.nextElementSibling;
    let value = Number(quantityElement.textContent);
    value += 1;
    refs.totalSpan.textContent =
      '$' +
      (
        Number(refs.totalSpan.textContent.replace('$', '')) + productPrice
      ).toFixed(2);
    quantityElement.textContent = value;
  }
});

async function getProducts() {
  try {
    let totalPrice = 0;
    const products = productsId.map(async id => {
      const response = await FoodApi.getProductById(id);
      return response;
    });
    const productItems = await Promise.all(products);

    totalPrice = productItems.reduce((total, elem) => {
      return total + elem.price;
    }, 0);
    const markup = createMarkup(productItems);
    refs.itemsList.innerHTML = markup;
    refs.quantityTitle.textContent = `${productItems.length}`;
    refs.totalSpan.textContent = `$${totalPrice.toFixed(2)}`;
    refs.quantityHeaderSpan.textContent = `${productItems.length}`;
    new SimpleBar(refs.itemsList, { autoHide: false });
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(items) {
  return items
    .map(({ name, category, size, img, price, _id }) => {
      return `<li class="item-list" data-id="${_id}">
            <div class="cart-product-img-container">
              <img
                class="cart-product-img"
                src="${img}"
                alt="product"
                width="64"
                height="64"
              />
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
                      <svg class="cart-icon-minus" width="14" height="14" data-action="decrement">
                        <use href="${icons}#icon-minus" data-action="decrement"></use>
                      </svg></button
                    ><span class="js-amount-span">1</span>
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
              <svg class="product-icon-cart" width="10" height="10" data-action="delete">
                <use href="${icons}#icon-close" class="icon" data-action="delete"></use>
              </svg>
            </button>
          </li>`;
    })
    .join('');
}

function isEmpty(items) {
  if (!items) {
    refs.fullCart.classList.add('is-hidden');
    refs.emptyCart.classList.remove('is-hidden');
  } else {
    refs.emptyCart.classList.add('is-hidden');
    refs.fullCart.classList.remove('is-hidden');
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
