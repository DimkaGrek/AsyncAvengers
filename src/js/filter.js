import FoodApi from './FoodApi';
import { throttle } from 'lodash';
import { getProductList } from './productList';
import { spinnerPlay, spinnerStop } from './spinner';

const refs = {
  ftInput: document.querySelector('.filters-input'),
  inputBtn: document.querySelector('.filters-btn'),
  ftSelect: document.querySelector('.select_list'),
  ftBtn: document.querySelector('.select-btn'),
  dropdownBtn: document.querySelector('.dropdown_button'),
  dropdownList: document.querySelector('.dropdown_list'),
  dropdownListItem: document.querySelectorAll('.dropdown_list-item'),
  productsList: document.querySelectorAll('.js-product-list'),
  resetBtn: document.querySelector('.reset_btn'),
};

export let params = takeParamsFromStorage();

window.addEventListener('resize', throttle(onResizeUpdateProductList, 1000));

function onResizeUpdateProductList() {
  if (checkClientWidth()) {
    getProductList();
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

// =======================Сhecking-saved-filters===================
function takeParamsFromStorage() {
  if (localStorage.getItem('searchKey') === null) {
    return {
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    };
  } else {
    const params = JSON.parse(localStorage.getItem('searchKey'));
    refs.ftInput.value = params.keyword;
    params.category ? (refs.ftBtn.innerHTML = params.category) : 'Categories';
    return params;
  }
}

async function getProductsByFilter(params) {
  const products = await FoodApi.getProductsByFilter(params);
  getProductList(products);
}
console.log(params);
checkClientWidth();
getProductsByFilter(params);
// =======================Create-Categories========================

const getProductsCategories = async () => {
  const categories = await FoodApi.getProductsCategories();

  const createOptions = categories.map(el => {
    return `<li class="select-li">${el}</li>`;
  });
  createOptions.push(`<li class="select-li">Show all</li>`);
  refs.ftSelect.insertAdjacentHTML('beforeend', createOptions.join('\n'));
};
getProductsCategories();

refs.ftBtn.addEventListener('click', openCategories);
refs.ftSelect.addEventListener('click', choiceCategories);

function openCategories() {
  refs.ftSelect.classList.toggle('is-open');
}

refs.ftSelect.addEventListener('mouseleave', () => {
  refs.ftSelect.classList.remove('is-open');
});

async function choiceCategories(li) {
  if (li.target.nodeName !== 'LI') return;
  const liValue = li.target.closest('.select-li');
  refs.ftBtn.innerHTML = liValue.textContent;
  refs.ftSelect.classList.remove('is-open');
  params.category = liValue.textContent;

  if (liValue.textContent === 'Show all') {
    params.category = null;
  }

  localStorage.setItem('searchKey', JSON.stringify(params));
  getProductsByFilter(params);
  // const productResoult = await FoodApi.getProductsByFilter(params);
  // getProductList(productResoult);
}

// =======================Create-Search-Input========================
const getSearch = async event => {
  const searchValue = event.target.value;
  console.log(searchValue);
  params.keyword = searchValue;
  localStorage.setItem('searchKey', JSON.stringify(params));
  getProductsByFilter(params);
};
// refs.inputBtn.addEventListener('', getSearch);
refs.ftInput.addEventListener('input', getSearch);

refs.dropdownBtn.addEventListener('click', function () {
  refs.dropdownList.classList.toggle('dropdown_list-visible');
  refs.dropdownList.classList.add('dropdownList');
});

refs.dropdownBtn.addEventListener('mouseenter', () => {
  refs.dropdownList.classList.add('dropdown_list-visible');
  refs.dropdownList.addEventListener('mouseleave', () => {
    refs.dropdownList.classList.remove('dropdown_list-visible');
  });
});

refs.dropdownList.addEventListener('mouseleave', () => {
  refs.dropdownList.classList.remove('dropdown_list-visible');
});

document.addEventListener('click', function (e) {
  if (e.target !== refs.dropdownBtn) {
    refs.dropdownList.classList.remove('dropdown_list-visible');
    refs.dropdownList.classList.remove('dropdown_list-visible');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    refs.dropdownList.classList.remove('dropdown_list-visible');
    refs.dropdownList.classList.remove('dropdown_list-visible');
  }
});

let elementValue = '';
refs.dropdownList.addEventListener('click', event => {
  // event.preventDefault();
  // const list = event.target.closest('.dropdown_list');
  if (event.target.nodeName !== 'LI') return;
  const element = event.target.closest('.dropdown_list-item');
  refs.dropdownBtn.textContent = element.textContent;
  elementValue = event.target.dataset.value;
  elementKey = event.target.dataset.key;
  delFromParams();
  if (elementKey !== 'showAll') params[elementKey] = elementValue;
  localStorage.setItem(`searchKey`, JSON.stringify(params));
  getProductsByFilter(params);
});

function onResetBtn() {
  localStorage.removeItem('searchKey');
  params = takeParamsFromStorage();
  refs.ftInput.value = '';
  refs.ftBtn.innerHTML = 'Categories';
  refs.dropdownBtn.innerHTML = 'A to Z';
  getProductsByFilter(params);
}

refs.resetBtn.addEventListener('click', onResetBtn);

function delFromParams() {
  delete params.byABC;
  delete params.byPrice;
  delete params.byPopularity;
}

async function getProductsByFilter(params) {
  try {
    spinnerPlay();
    const products = await FoodApi.getProductsByFilter(params);
    getProductList(products);
  } catch (error) {
    console.log(error);
  } finally {
    spinnerStop();
  }
}

// function addParamsToFilter() {
//   const sort = JSON.parse(localStorage.getItem('sort'));
//   getProductsByFilter(sort);
//   if (sort === 'showAll') {
//     localStorage.clear();
//   }
// }
