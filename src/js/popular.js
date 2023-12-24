import icons from '../img/icons.svg';
import foodApi from './FoodApi';
import { openModalProductCard } from './modal/modal';
import { switchSameBtn, putProductListItemInCart } from './tools';

const popularList = document.querySelector('.popular-list');
const cartQuantity = document.querySelector('.js-cart-quantity');

renderPopularList();

async function renderPopularList() {
  const popularProducts = await foodApi.getPopularProducts();

  const markup = popularProducts
    .map(({ category, img, name, popularity, size, _id }) => {
      return `
            <li class="popular-item" data-id="${_id}">
                <a href="" class="popular-link">
                    <div class="polular-content-container">
                        <div class="popular-img-container">
                            <img src="${img}" alt="${name}" class="popular-img"/>
                        </div>
                        <div class="popular-content">
                            <h3 class="popular-item-name">${name}</h3>
                            <p class="popular-item-title">
                                Category: <span class="popular-item-title-name">${category.replace(
                                  '_',
                                  ' '
                                )}</span>
                            </p>
                            <div class="popular-content-bottom">
                                <p class="popular-item-title">
                                    Size: <span class="popular-item-title-name">${size}</span>
                                </p>
                                <p class="popular-item-title">
                                    Popularity: <span class="popular-item-title-name">${popularity}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    ${renderButtonForProductList(_id)}
                </a>
            </li>
        `;
    })
    .join('');

  popularList.insertAdjacentHTML('beforeend', markup);
  popularList.addEventListener('click', onProductClick);
}

async function onProductClick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'UL') return;

  const li = event.target.closest('LI');

  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'use'
  ) {
    const button = event.target.closest('.popular-buy-btn');
    switchSameBtn(button.dataset.id);
    putProductListItemInCart(button.dataset.id);
  } else {
    try {
      const data = await foodApi.getProductById(li.dataset.id);
      console.log(data);
      openModalProductCard(data);
    } catch (error) {
      console.log(error);
    }
  }
}

// function putProductListItemInCart(id) {
//   const newCART = JSON.parse(localStorage.getItem('CART'));
//   const foundItem = newCART.find(cartItem => cartItem.productId === id);
//   if (foundItem !== undefined) return;

//   newCART.push({ productId: id, amount: 1 });
//   localStorage.setItem('CART', JSON.stringify(newCART));
//   const value = +cartQuantity.textContent;
//   cartQuantity.textContent = value + 1;
// }

// function isCheckedCart(ref) {
//   ref.firstElementChild.classList.add('is-hidden');
//   ref.lastElementChild.classList.remove('is-hidden');
//   ref.disabled = true;
// }

function renderButtonForProductList(id) {
  const cart = localStorage.getItem('CART');
  const cheked = `<button class="popular-buy-btn" data-id="${id}" aria-label="added to cart" disabled>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
              <use href="${icons}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon" width="12" height="12">
              <use href="${icons}#icon-check" class="icon"></use>
            </svg>
          </button>`;
  const uncheked = `<button class="popular-buy-btn" data-id="${id}" aria-label="button add to cart">
            <svg class="popular-buy-btn-icon" width="12" height="12">
                <use href="${icons}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
                <use href="${icons}#icon-check" class="icon"></use>
            </svg>
        </button>`;
  return cart.includes(id) ? cheked : uncheked;
}
