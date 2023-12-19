// ===== Examples of use FoodAPI (should be REMOVE in production version)=========
import FoodApi from './FoodApi';

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
