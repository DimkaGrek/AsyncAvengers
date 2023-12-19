import throttle from 'lodash.throttle';
// ===== Examples of use FoodAPI (should be REMOVE in production version)=========
import FoodApi from './FoodApi';
import './header';
import './filter';
import './productList';
import './popular';
import './discount';
import './footer';
import './modal/modal';
import './error';

// ===== Examples of use FoodAPI (should be REMOVE in production version)=========
const getProductList = async () => {
  const products = await FoodApi.getProducts();
  console.log(products);
};

const getPopularProductList = async () => {
  const products = await FoodApi.getPopularProducts();
  console.log(products);
};

const getDiscountProductList = async () => {
  const products = await FoodApi.getDiscountProducts();
  console.log(products);
};

const getProductsCategories = async () => {
  const categories = await FoodApi.getProductsCategories();
  console.log(categories);
};

const getProduct = async id => {
  const product = await FoodApi.getProductById(id);
  console.log(product);
};

const sendOrder = async (email, products) => {
  const order = {
    email,
    products,
  };
  const message = await FoodApi.createOrder(order);
  console.log(message);
};

const orderSubscription = async email => {
  const message = await FoodApi.createSubscription(email);
  console.log(message);
};

getProductList();
getPopularProductList();
getDiscountProductList();
getProductsCategories();
getProduct('640c2dd963a319ea671e383b');

// sendOrder('dmytrozinkovsky@gmail.com', [
//   { productId: '640c2dd963a319ea671e383b', amount: 2 },
// ]);

// orderSubscription('dimkagrek2023@gmail.com');
// =========================================
// -----------------ScrollUp Button----------------------
const scrollUpButton = document.querySelector('.scroll-up-btn');
const heightSectionHero = document
  .querySelector('.hero-container')
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
