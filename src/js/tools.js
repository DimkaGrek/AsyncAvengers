import { refs } from './refs';

// need ref on span in header
export function putProductListItemInCart(id) {
  const newCART = JSON.parse(localStorage.getItem('CART'));
  const foundItem = newCART.find(cartItem => cartItem.productId === id);
  if (foundItem !== undefined) {
    const filteredProducts = newCART.filter(elem => elem.productId !== id);
    localStorage.setItem('CART', JSON.stringify(filteredProducts));
    const value = +refs.cartQuantity[0].textContent;
    refs.cartQuantity.forEach(elem => (elem.textContent = value - 1));
    return;
  }

  newCART.push({ productId: id, amount: 1 });
  localStorage.setItem('CART', JSON.stringify(newCART));
  const value = +refs.cartQuantity[0].textContent;
  refs.cartQuantity.forEach(elem => (elem.textContent = value + 1));
}
// take refs on element button can toggle clases inside function
export function isCheckedCart(ref) {
  ref.firstElementChild.classList.toggle('is-hidden');
  ref.lastElementChild.classList.toggle('is-hidden');
  ref.disabled ? (ref.disabled = false) : (ref.disabled = true);
}

export function switchSameBtn(elemId) {
  const btnProductElem = document.querySelector(
    `.product-button-cart[data-id="${elemId}"]`
  );
  const btnDiscountElem = document.querySelector(
    `.button-discount[data-id="${elemId}"]`
  );
  const btnPopularElem = document.querySelector(
    `.popular-buy-btn[data-id="${elemId}"]`
  );
  if (btnProductElem) {
    isCheckedCart(btnProductElem);
  }

  if (btnPopularElem) {
    isCheckedCart(btnPopularElem);
  }

  if (btnDiscountElem) {
    isCheckedCart(btnDiscountElem);
  }
}
