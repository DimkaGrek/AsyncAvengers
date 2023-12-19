import FoodApi from './FoodApi';
const refs = {
  productList: document.querySelector('#product-list'),
};
getProductList();
refs.productList.addEventListener('click', onListCartClick);

function onListCartClick({ target }) {
  const button = target.closest('.product-button-cart');
  if (button === null) return;
  button.querySelector('use').href.baseVal = '/icons.21bad73c.svg#icon-check';
}

async function getProductList() {
  try {
    const products = await FoodApi.getProducts();
    refs.productList.innerHTML = renderProductListMarcup(products);
  } catch (error) {
    console.log(error);
  }
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
        <button class="product-button-cart">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="/icons.21bad73c.svg#icon-shopping-cart" class="icon"></use>
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
          <use href="/icons.21bad73c.svg#icon-discount"></use>
        </svg> `;
  return isDiscount ? marcup : '';
}
