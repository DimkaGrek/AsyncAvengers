import FoodApi from './FoodApi';
import { throttle } from 'lodash';
import { getProductList } from './productList';
import { spinnerPlay, spinnerStop } from './spinner';
import { openModalError } from './modal/modal';
import { refs } from './refs';

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

    if ('byABC' in params) {
      refs.dropdownBtn.textContent =
        params.byABC === 'true' ? 'A to Z' : 'Z to A';
    }
    if ('byPrice' in params) {
      refs.dropdownBtn.textContent =
        params.byPrice === 'true' ? 'Cheap' : 'Expensive';
    }
    if ('byPopularity' in params) {
      refs.dropdownBtn.textContent =
        params.byPopularity === 'true' ? 'Not popular' : 'Popular';
    }

    return params;
  }
}

checkClientWidth();
getProductsByFilter(params);
// =======================Create-Categories========================

const getProductsCategories = async () => {
  try {
    const categories = await FoodApi.getProductsCategories();

    const createOptions = categories.map(el => {
      return `<li class="select-li">${el}</li>`;
    });
    createOptions.push(`<li class="select-li">Show all</li>`);
    refs.ftSelect.insertAdjacentHTML('beforeend', createOptions.join('\n'));
  } catch (error) {
    openModalError(
      'Server Issue',
      `We're sorry, but it seems there's an issue with our server. Please try again later.`
    );
  }
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

function choiceCategories(li) {
  if (li.target.nodeName !== 'LI') return;
  const liValue = li.target.closest('.select-li');
  refs.ftBtn.innerHTML = liValue.textContent;
  refs.ftSelect.classList.remove('is-open');
  params.page = 1;
  params.category = liValue.textContent;

  if (liValue.textContent === 'Show all') {
    params.category = null;
  }

  localStorage.setItem('searchKey', JSON.stringify(params));
  getProductsByFilter(params);
}

// =======================Create-Search-Input========================
const getSearch = event => {
  const searchValue = event.target.value;
  params.page = 1;
  params.keyword = searchValue;
  localStorage.setItem('searchKey', JSON.stringify(params));
  getProductsByFilter(params);
};
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
  }
  if (e.target !== refs.ftBtn) {
    refs.ftSelect.classList.remove('is-open');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    refs.dropdownList.classList.remove('dropdown_list-visible');
    refs.dropdownList.classList.remove('dropdown_list-visible');
  }
});

refs.dropdownList.addEventListener('click', event => {
  if (event.target.nodeName !== 'LI') return;
  const element = event.target.closest('.dropdown_list-item');
  refs.dropdownBtn.textContent = element.textContent;
  const elementValue = event.target.dataset.value;
  const elementKey = event.target.dataset.key;
  delFromParams();
  if (elementKey !== 'showAll') params[elementKey] = elementValue;
  localStorage.setItem(`searchKey`, JSON.stringify(params));
  getProductsByFilter(params);
});

function onResetBtn() {
  localStorage.removeItem('searchKey');
  params = takeParamsFromStorage();
  checkClientWidth();
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
    refs.pagiContainer.classList.add('is-hidden');
    openModalError(
      'Server Issue',
      `We're sorry, but it seems there's an issue with our server. Please try again later.`
    );
  } finally {
    spinnerStop();
  }
}
