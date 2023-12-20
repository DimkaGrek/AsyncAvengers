import throttle from 'lodash.throttle';

import FoodApi from './FoodApi';
import './header';
import './filter';
import './productList';
import './popular';
import './discount';
import './footer';
import './modal/modal';
import './error';
import { spinnerPlay } from './spinner';

// ===== Examples of use FoodAPI (should be REMOVE in production version)=========
const getProductList = async () => {
  const products = await FoodApi.getProducts();
  console.log('getProductList: ', products);
};

const getPopularProductList = async () => {
  const products = await FoodApi.getPopularProducts();
  console.log('getPopularProductList: ', products);
};

const getDiscountProductList = async () => {
  const products = await FoodApi.getDiscountProducts();
  console.log('getDiscountProductList: ', products);
};

const getProductsCategories = async () => {
  const categories = await FoodApi.getProductsCategories();
  console.log('getProductsCategories: ', categories);
};

const getProduct = async id => {
  const product = await FoodApi.getProductById(id);
  console.log('getProduct: ', product);
};

const sendOrder = async (email, products) => {
  const order = {
    email,
    products,
  };
  const message = await FoodApi.createOrder(order);
  console.log('sendOrder: ', message);
};

const orderSubscription = async email => {
  const message = await FoodApi.createSubscription(email);
  console.log('orderSubscription: ', message);
};

const getProductsByFilter = async params => {
  const products = await FoodApi.getProductsByFilter(params);
  console.log('getProductsByFilter: ', products);
};

// Variant 2
// const getProductsByFilter = async (
//   keyword = '',
//   category = '',
//   page = 1,
//   limit = 6
// ) => {
//   const products = await FoodApi.getProductsByFilter(
//     keyword,
//     category,
//     page,
//     limit
//   );
//   console.log(products);
// };

getProductList();
getPopularProductList();
getDiscountProductList();
getProductsCategories();
getProduct('640c2dd963a319ea671e383b');

// sendOrder('dmytrozinkovsky@gmail.com', [
//   { productId: '640c2dd963a319ea671e383b', amount: 2 },
// ]);

// orderSubscription('dimkagrek2023@gmail.com');

getProductsByFilter({ keyword: 'Ac' });

// =========================================
// -----------------ScrollUp Button----------------------
const scrollUpButton = document.querySelector('.js-scroll-up-btn');
const heightSectionHero = document
  .querySelector('.js-hero-container')
  .getBoundingClientRect().height;
document.addEventListener(
  'scroll',
  throttle(() => {
    if (window.scrollY > heightSectionHero / 2) {
      return scrollUpButton.classList.add('show');
    }
    scrollUpButton.classList.remove('show');
  }, 500)
);
scrollUpButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});
// ==========================================================
