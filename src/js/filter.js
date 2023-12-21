import FoodApi from './FoodApi';

let params = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};

const refs = {
  ftInput: document.querySelector('.filters-input'),
  ftSelect: document.querySelector('.select_list'),
  ftBtn: document.querySelector('.select-btn'),
};

// =======================Create-Categories========================

const getProductsCategories = async () => {
  const categories = await FoodApi.getProductsCategories();

  const createOptions = categories.map(el => {
    return `<li class="select-li">${el}</li>`;
  });
  createOptions.unshift(`<li class="select-li">Categories</li>`);
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
  const productResoult = await FoodApi.getProductsByFilter(params);
}

// =======================Create-Search-Input========================
const getSearch = e => {
  const searchValue = e.target.value;
  console.log(searchValue);
  params.keyword = searchValue;
  localStorage.setItem('searchKey', JSON.stringify(params));
};
refs.ftInput.addEventListener('input', getSearch);
