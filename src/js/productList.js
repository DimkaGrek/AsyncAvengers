import { throttle } from 'lodash';
import FoodApi from './FoodApi';
import icons from '../img/icons.svg';
import { openModalProductCard } from './modal/modal';
// import { spinnerStop, spinnerPlay } from './spinner';

const refs = {
  productList: document.querySelector('.js-product-list'),
  cartQuantity: document.querySelector('.js-cart-quantity'),
  pagiList: document.querySelector('.js-pagi-pages'),
  pagiContainer: document.querySelector('.js-pagi-container'),
  pagiBtnLeftDuble: document.querySelector('[data-button-left="dubleArrow"]'),
  pagiBtnLeft: document.querySelector('[data-button-left="arrow"]'),
  pagiBtnRight: document.querySelector('[data-button-right="arrow"]'),
  pagiBtnRightDuble: document.querySelector('[data-button-right="dubleArrow"]'),
};

const params = {
  limit: 5,
  page: 1,
};

let currentPage = null;

checkCartContents();
checkClientWidth();
getProductList();

refs.productList.addEventListener('click', onListCartClick);
refs.pagiList.addEventListener('click', onPagiListClick);
refs.pagiContainer.addEventListener('click', onPagiBtnClick);
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
    // spinnerPlay();
    try {
      const data = await FoodApi.getProductById(item.dataset.id);
      openModalProductCard(data);
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   spinnerStop();
    // }
  }
}

function onPagiListClick({ target }) {
  if (target.nodeName !== 'LI') return;
  if (target.textContent === '...') return;
  params.page = +target.textContent;
  getProductList();
}

function onPagiBtnClick(event) {
  const element = event.target.closest('button');
  if (element === null) return;
  if (element === refs.pagiBtnLeft) {
    params.page -= 1;
    getProductList();
  }
  if (element === refs.pagiBtnLeftDuble) {
    params.page -= 2;
    getProductList();
  }
  if (element === refs.pagiBtnRight) {
    params.page += 1;
    getProductList();
  }
  if (element === refs.pagiBtnRightDuble) {
    params.page += 2;
    getProductList();
  }
}

function togglePagiBtn(page, totalPages) {
  if (page > 1) {
    refs.pagiBtnLeftDuble.disabled = true;
    refs.pagiBtnLeft.disabled = false;
  }
  if (page > 2) {
    refs.pagiBtnLeftDuble.disabled = false;
  }

  if (page === 1) {
    refs.pagiBtnLeft.disabled = true;
    refs.pagiBtnLeftDuble.disabled = true;
  }
  if (totalPages - 3 < page) {
    refs.pagiBtnRightDuble.disabled = false;
  }
  if (totalPages - 2 < page) {
    refs.pagiBtnRightDuble.disabled = true;
    refs.pagiBtnRight.disabled = false;
  }

  if (page === totalPages) {
    refs.pagiBtnRight.disabled = true;
    refs.pagiBtnRightDuble.disabled = true;
  }
}

function onResizeUpdateProductList() {
  if (checkClientWidth()) {
    getProductList();
  }
}

async function getProductList(products = {}) {
  // spinnerPlay();
  try {
    if (Object.keys(products).length === 0) {
      products = await FoodApi.getProductsByFilter(params);
    }
    const { page, totalPages } = products;
    currentPage = page;
    refs.productList.innerHTML = renderProductListMarcup(products);
    if (isMoreThenOnePage(totalPages)) {
      refs.pagiList.innerHTML = renderProductListPagi(page, totalPages);
    }
    togglePagiBtn(page, totalPages);
  } catch (error) {
    refs.pagiContainer.classList.add('is-hidden');

    console.log(error);
  }
  // finally {
  //   spinnerStop();
  // }
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
    const cartContent = JSON.parse(localStorage.getItem('CART'));
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
          <use href="${icons}#icon-discount"></use>
        </svg> `;
  return isDiscount ? marcup : '';
}

function renderButtonForProductList(id) {
  const cart = localStorage.getItem('CART');
  const cheked = `<button class="product-button-cart" data-id="${id} disabled">
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-check"></use>
          </svg>
        </button>`;
  const uncheked = `<button class="product-button-cart" data-id="${id}">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${icons}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${icons}#icon-check"></use>
          </svg>
        </button>`;
  return cart.includes(id) ? cheked : uncheked;
}

function prepareForRenderPagi(page, totalPage) {
  const res = [];
  if (totalPage === 1) return [1];

  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth > 767) {
    if (totalPage <= 5) {
      for (i = 1; i <= totalPage; i++) {
        res.push(i);
      }
      return res;
    }
    if (totalPage > 5) {
      if (page === 1 || page === 2 || page === 3) {
        return [1, 2, 3, '...', totalPage];
      }
      if (
        page === totalPage ||
        page === totalPage - 1 ||
        page === totalPage - 2
      ) {
        res.push(1, '...');
        for (i = totalPage - 2; i <= totalPage; i++) {
          res.push(i);
        }
        return res;
      }
      return [1, '...', page, '...', totalPage];
    }
  }
  if (totalPage <= 3) {
    for (i = 1; i <= totalPage; i++) {
      res.push(i);
    }
    return res;
  }
  if (totalPage >= 5) {
    if (page === 1 || page === 2) {
      return [1, 2, '...'];
    }
    if (page === totalPage || page === totalPage - 1) {
      res.push('...');
      for (i = totalPage - 1; i <= totalPage; i++) {
        res.push(i);
      }
      return res;
    }
    return ['...', page, '...'];
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

function isMoreThenOnePage(totalPages) {
  if (totalPages > 1) {
    refs.pagiContainer.classList.remove('is-hidden');
    return true;
  } else {
    refs.pagiContainer.classList.add('is-hidden');
    return false;
  }
}

function checkClientWidth() {
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth > 1439) {
    if (params.limit === 9) return false;
    params.limit = 9;
    return true;
  }
  if (clientWidth > 767) {
    if (params.limit === 8) return false;
    params.limit = 8;
    return true;
  }
  if (clientWidth > 319) {
    if (params.limit === 6) return false;
    params.limit = 6;
    return true;
  }
}
export {
  onListCartClick,
  putProductListItemInCart,
  renderProductListMarcup,
  renderButtonForProductList,
  isCheckedCart,
  getProductList,
};
