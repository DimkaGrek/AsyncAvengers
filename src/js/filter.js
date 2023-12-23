import FoodApi from './FoodApi';
import { getProductList } from './productList';

let params;

const refs = {
  ftInput: document.querySelector('.filters-input'),
  inputBtn: document.querySelector('.filters-btn'),
  ftSelect: document.querySelector('.select_list'),
  ftBtn: document.querySelector('.select-btn'),
};

// =======================Сhecking-saved-filters===================
if (localStorage.getItem('searchKey') === null) {
  params = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };
} else {
  params = JSON.parse(localStorage.getItem('searchKey'));
  refs.ftInput.value = params.keyword;
  refs.ftBtn.innerHTML = params.category;
}
async function getProductsByFilter(params) {
  const products = await FoodApi.getProductsByFilter(params);
  getProductList(products);
}
getProductsByFilter(params);
// =======================Create-Categories========================

const getProductsCategories = async () => {
  const categories = await FoodApi.getProductsCategories();

  const createOptions = categories.map(el => {
    return `<li class="select-li">${el}</li>`;
  });
  createOptions.unshift(`<li class="select-li">Show all</li>`);
  refs.ftSelect.insertAdjacentHTML('beforeend', createOptions.join('\n'));
};
getProductsCategories();

refs.ftBtn.addEventListener('mouseenter', openCateg);
refs.ftBtn.addEventListener('click', openCategories);
refs.ftSelect.addEventListener('click', choiceCategories);

function openCategories() {
  refs.ftSelect.classList.toggle('is-open');
}
function openCateg() {
  refs.ftSelect.classList.add('is-open');
}

refs.ftSelect.addEventListener('mouseleave', () => {
  refs.ftSelect.classList.remove('is-open');
});

document.addEventListener('click', function (e) {
  if (e.target !== refs.ftBtn) {
    refs.ftSelect.classList.remove('is-open');
  }
});

async function choiceCategories(li) {
  const liValue = li.target.closest('.select-li');
  refs.ftBtn.innerHTML = liValue.textContent;
  refs.ftSelect.classList.remove('is-open');
  params.category = liValue.textContent;

  if (liValue === 'Show all') {
    params.category = null;
  }
  localStorage.setItem('searchKey', JSON.stringify(params));
  const productResoult = await FoodApi.getProductsByFilter(params);
  getProductList(productResoult);
}

// =======================Create-Search-Input========================
const getSearch = async () => {
  const searchValue = refs.ftInput.value;
  params.keyword = searchValue;
  localStorage.setItem('searchKey', JSON.stringify(params));
  const productResoult = await FoodApi.getProductsByFilter(params);
  getProductList(productResoult);
};
refs.inputBtn.addEventListener('click', getSearch);
