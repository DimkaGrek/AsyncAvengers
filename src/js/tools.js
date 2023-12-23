import { refs } from './refs';

// need ref on span in header
export function putProductListItemInCart(id) {
  console.log('putProductListItemInCart');
  const newCART = JSON.parse(localStorage.getItem('CART'));
  const foundItem = newCART.find(cartItem => cartItem.productId === id);
  console.log('newCart: ', newCART);
  console.log('foundItem', foundItem);
  if (foundItem !== undefined) {
    const filteredProducts = newCART.filter(elem => elem.productId !== id);
    localStorage.setItem('CART', JSON.stringify(filteredProducts));
    const value = +refs.cartQuantity.textContent;
    refs.cartQuantity.textContent = value - 1;
    return;
  }

  newCART.push({ productId: id, amount: 1 });
  localStorage.setItem('CART', JSON.stringify(newCART));
  const value = +refs.cartQuantity.textContent;
  refs.cartQuantity.textContent = value + 1;
}
// take refs on element button can toggle clases inside function
export function isCheckedCart(ref) {
  ref.firstElementChild.classList.toggle('is-hidden');
  ref.lastElementChild.classList.toggle('is-hidden');
  console.log('toggle button');
  ref.disabled ? (ref.disabled = false) : (ref.disabled = true);
}

export function switchSameBtn(elemId) {
  console.log('switchSameBtn');
  const btnProductElem = document.querySelector(`button[data-id="${elemId}"]`);
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
