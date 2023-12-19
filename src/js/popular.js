import icons from "../img/icons.svg";
import foodApi from "./FoodApi";

const popularList = document.querySelector('.popular-list');

renderPopularList();

async function renderPopularList() {
    const popularProducts = await foodApi.getPopularProducts();

    const markup = popularProducts.map(({category, img, name, popularity, size, _id}) => {
        return `
            <li class="popular-item" data-id="${_id}">
                <a href="" class="popular-link">
                    <div class="polular-content-container">
                        <div class="popular-img-container">
                            <img src="${img}" alt="${name}" class="popular-img"/>
                        </div>
                        <div class="popular-content">
                            <h5 class="popular-item-name">${name}</h5>
                            <p class="popular-item-title">
                                Category: <span class="popular-item-title-name">${category.replace('_', ' ')}</span>
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
                    <button type="button" class="popular-buy-btn">
                        <svg class="popular-buy-btn-icon" width="12" height="12">
                            <use href="${icons}#icon-popular-shopping-cart"></use>
                        </svg>
                    </button>
                </a>
            </li>
        `;
    }).join('');

    popularList.insertAdjacentHTML('beforeend', markup);
    popularList.addEventListener('click', onProductClick);
}

function onProductClick(event) {
    event.preventDefault();
    if(event.target.nodeName === 'UL') return;

    const li = event.target.closest('LI');

    if(event.target.nodeName === 'BUTTON' 
        || event.target.nodeName === 'svg' 
        || event.target.nodeName === 'use') {
        console.log(li.dataset.id);
        // add product to cart
    } else {
        console.log(li.dataset.id);
        // open product detail modal
    }
}