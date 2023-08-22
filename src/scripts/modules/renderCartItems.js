import { getData } from './storage';
import { sumPrices } from './sumPrices';

export const renderCartItems = () => {
  const container = document.querySelector('.cart__list');
  const counter = document.querySelector('#cart-counter');

  const data = getData('cart');
  let itemsNumber = 0;
  container.innerHTML = '';

  data.forEach(item => {
    const smallPhoto = item.photo.replace('.jpg', '_small.jpg');
    const price = parseInt(item.price.split(' ').join('')) * item.count;
    const total = (price + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    const elem = document.createElement('li');
    elem.classList.add('cart__item');
    elem.setAttribute('data-id', item.id);

    itemsNumber += item.count;

    elem.insertAdjacentHTML('beforeend', `
      <img class="cart__image" src="${smallPhoto}" width="56" height="60" alt="Фото двери ${item.title}">
      <div class="cart__body">
          <h3 class="cart__title text text--medium">${item.title}</h3>
          <p class="cart__subtitle caption caption--medium">${item.subtitle}</p>
      </div>
      <div class="cart__inner">
          <p class="cart__price text text--medium" data-price="${item.price}">${total} ₽</p>
          <div class="cart__counter">
              <button class="button cart__change cart__change--decrease">-</button>
              <p class="cart__amount">${item.count}</p>
              <button class="button cart__change cart__change--increase">+</button>
          </div>
      </div>
    `);

    container.append(elem);
  });

  counter.textContent = itemsNumber;
  sumPrices();
};
