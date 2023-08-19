import { sumPrices } from "./sumPrices";

export const changeCartItem = () => {
  const cartList = document.querySelector('.cart__list');
  const counter = document.querySelector('#cart-counter');

  const changeItem = evt => {
    if (evt.target.closest('.cart__change')) {
      const item = evt.target.closest('.cart__item');
      const count = item.querySelector('.cart__amount');
      const price = item.querySelector('.cart__price');
      const basePrice = parseInt(price.getAttribute('data-price').split(' ').join(''));
      const currentPrice = parseInt(price.firstChild.textContent.split(' ').join(''));

      if (evt.target.closest('.cart__change--decrease')) {
        const total = ((currentPrice - basePrice) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

        if (count.textContent <= 1) {
          item.remove();
        } else {
          count.textContent = +count.textContent - 1;
          price.textContent = `${total} ₽`;
        }

        counter.textContent = +counter.textContent - 1;
      }

      if (evt.target.closest('.cart__change--increase')) {
        const total = ((basePrice + currentPrice) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

        count.textContent = +count.textContent + 1;
        price.textContent = `${total} ₽`;
        counter.textContent = +counter.textContent + 1;
      }

      sumPrices();
    }
  };

  cartList.addEventListener('click', changeItem);
};
