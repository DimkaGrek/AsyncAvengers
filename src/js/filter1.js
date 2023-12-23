import FoodApi from './FoodApi';
import { getProductList } from './productList';

const refs = {
  dropdownBtn: document.querySelector('.dropdown_button'),
  dropdownList: document.querySelector('.dropdown_list'),
  dropdownListItem: document.querySelectorAll('.dropdown_list-item'),
  productsList: document.querySelectorAll('.js-product-list'),
};

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
  event.preventDefault();
  const list = event.target.closest('.dropdown_list');
  const element = event.target.closest('.dropdown_list-item');
  refs.dropdownBtn.textContent = element.textContent;
  elementValue = event.target.dataset.value;
  elementKey = event.target.dataset.key;
  const sort = { [elementKey]: elementValue };
  localStorage.setItem(`sort`, JSON.stringify(sort));
  //   console.log(sort);
  addParamsToFilter();
});

async function getProductsByFilter(params) {
  try {
    const products = await FoodApi.getProductsByFilter(params);
    getProductList(products);
  } catch (error) {}
}

function addParamsToFilter() {
  const sort = JSON.parse(localStorage.getItem('sort'));
  getProductsByFilter(sort);
  if (sort === 'showAll') {
    localStorage.clear();
  }
}
