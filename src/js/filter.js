import FoodApi from './FoodApi';

let params = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};

const refs = {
  ftInput: document.querySelector('.filters-input'),
  inputBtn: document.querySelector('.filters-btn'),
  ftSelect: document.querySelector('.select_list'),
  ftBtn: document.querySelector('.select-btn'),
};

// =======================Сhecking-saved-filters===================
if (localStorage.getItem('searchKey') === null) {
  let params = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };
} else {
  params = JSON.parse(localStorage.getItem('searchKey'));
  refs.ftInput.innerHTML = params.keyword;
  refs.ftBtn.innerHTML = params.category;
}
console.log(refs.ftInput);
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

refs.ftBtn.addEventListener('click', openCategories);
refs.ftSelect.addEventListener('click', choiceCategories);

function openCategories() {
  refs.ftSelect.classList.toggle('is-open');
}

async function choiceCategories(li) {
  const liValue = li.target.textContent;
  refs.ftBtn.innerHTML = liValue;
  refs.ftSelect.classList.remove('is-open');
  params.category = liValue;

  if (liValue === 'Show all') {
    params.category = null;
  }
  const productResoult = await FoodApi.getProductsByFilter(params);
  localStorage.setItem('searchKey', JSON.stringify(params));
}

// =======================Create-Search-Input========================
const getSearch = async () => {
  const searchValue = refs.ftInput.value;
  params.keyword = searchValue;
  localStorage.setItem('searchKey', JSON.stringify(params));
  const productResoult = await FoodApi.getProductsByFilter(params);
};
refs.inputBtn.addEventListener('click', getSearch);
