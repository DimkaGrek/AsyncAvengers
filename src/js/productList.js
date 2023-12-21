import { throttle } from 'lodash';
import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
import { openModalProductCard } from './modal/modal';

const refs = {
  productList: document.querySelector('.js-product-list'),
  cartQuantity: document.querySelector('.js-cart-quantity'),
  pagiList: document.querySelector('.js-pagi-pages'),
};

let limit = 0;
let page = 1;
let currentPage = null;

checkCartContents();
checkClientWidth();
getProductList();

refs.productList.addEventListener('click', onListCartClick);
refs.pagiList.addEventListener('click', onPagiListClick);
window.addEventListener('resize', throttle(onResizeUpdateProductList, 1000));

async function onListCartClick(event) {
  const button = event.target.closest('.product-button-cart');
  if (button !== null) {
    isCheckedCart(button);
    putProductListItemInCart(button.dataset.id);
    return;
  }
  const item = event.target.closest('.product-card');
  if (item !== null) {
    try {
      const data = await FoodApi.getProductById(item.dataset.id);
      openModalProductCard(data);
    } catch (error) {
      console.log(error);
    }
  }
}

function onPagiListClick({ target }) {
  if (target.nodeName !== 'LI') return;
  if (target.textContent === '...') {
    if (target.closest('ul').firstElementChild === target) {
      page = currentPage - 3;
      getProductList();
      return;
    }
    if (target.closest('ul').lastElementChild === target) {
      page = currentPage + 3;
      getProductList();
      return;
    }
  }

  page = +target.textContent;
  getProductList();
}

function onResizeUpdateProductList() {
  if (checkClientWidth()) {
    getProductList();
  }
}

async function getProductList() {
  const params = { limit: limit, page: page };
  try {
    const products = await FoodApi.getProductsByFilter(params);
    const { page, totalPages } = products;
    currentPage = page;
    refs.productList.innerHTML = renderProductListMarcup(products);
    refs.pagiList.innerHTML = renderProductListPagi(page, totalPages);
  } catch (error) {
    console.log(error);
  }
}

function putProductListItemInCart(id) {
  const newCART = JSON.parse(localStorage.getItem('CART'));
  if (newCART.includes(id)) return;

  newCART.push({ productId: id, amount: 1 });
  localStorage.setItem('CART', JSON.stringify(newCART));
  const value = +refs.cartQuantity.textContent;
  refs.cartQuantity.textContent = value + 1;
}

function isCheckedCart(ref) {
  ref.firstElementChild.classList.add('is-hidden');
  ref.lastElementChild.classList.remove('is-hidden');
  ref.disabled = true;
}

function checkCartContents() {
  if (localStorage.getItem('CART')) {
    cartContent = JSON.parse(localStorage.getItem('CART'));
    refs.cartQuantity.textContent = cartContent.length;
    return;
  }
  localStorage.setItem('CART', JSON.stringify([]));
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
        ${renderButtonForProductList(_id)}
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

function renderButtonForProductList(id) {
  const cart = localStorage.getItem('CART');
  const cheked = `<button class="product-button-cart" data-id="${id} disabled">
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>`;
  const uncheked = `<button class="product-button-cart" data-id="${id}">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-check" class="icon"></use>
          </svg>
        </button>`;
  return cart.includes(id) ? cheked : uncheked;
}

function prepareForRenderPagi(page, totalPage) {
  const res = [];
  if (totalPage === 1) return [1];
  if (totalPage < 5) {
    for (i = 1; i <= totalPage; i++) {
      res.push(i);
    }
    return res;
  }
  if (totalPage >= 5) {
    if (page === 1 || page === 2 || page === 3) {
      return [1, 2, 3, 4, '...'];
    }
    if (
      page === totalPage ||
      page === totalPage - 1 ||
      page === totalPage - 2
    ) {
      res.push('...');
      for (i = totalPage - 3; i <= totalPage; i++) {
        res.push(i);
      }
      return res;
    }
    return ['...', page - 1, page, page + 1, '...'];
  }
}

function renderProductListPagi(page, totalPage) {
  arr = prepareForRenderPagi(page, totalPage);
  return arr
    .map(cur => {
      if (cur === page) {
        return `<li class="pagi-item is-active">${cur}</li>`;
      }
      if (cur === '...') {
        return `<li class="pagi-item dotted">${cur}</li>`;
      }
      return `<li class="pagi-item">${cur}</li>`;
    })
    .join('');
}

function checkClientWidth() {
  const a = document.documentElement.clientWidth;
  if (a > 1439) {
    if (limit === 9) return false;
    limit = 9;
    return true;
  }
  if (a > 767) {
    if (limit === 8) return false;
    limit = 8;
    return true;
  }
  if (a > 319) {
    if (limit === 6) return false;
    limit = 6;
    return true;
  }
}
export { onListCartClick, putProductListItemInCart, renderProductListMarcup };
