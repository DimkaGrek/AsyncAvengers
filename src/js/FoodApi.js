import axiosLib from 'axios';
const axios = axiosLib.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

class FoodAPI {
  async getProducts() {
    const res = await axios.get('/products');
    return res.data;
  }

  async getPopularProducts() {
    const res = await axios.get('/products/popular');
    return res.data;
  }

  async getDiscountProducts() {
    const res = await axios.get('/products/discount');
    return res.data;
  }

  async getProductsCategories() {
    const res = await axios.get('/products/categories');
    return res.data;
  }

  async getProductById(id) {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  }

  async createOrder(data) {
    const res = await axios.post('/orders', data);
    return res.data;
  }

  async createSubscription(email) {
    const res = await axios.post('/subscription', { email: email });
    return res.data;
  }

  async getProductsByFilter(params) {
    const res = await axios.get('/products', { params });
    return res.data;
  }
  // async getProductsByFilter(keyword = '', category = '', page = 1, limit = 6) {
  //   const params = {
  //     keyword,
  //     category,
  //     page,
  //     limit,
  //   };
  //   const res = await axios.get('/products', { params });
  //   return res.data;
  // }
}

export default new FoodAPI();
