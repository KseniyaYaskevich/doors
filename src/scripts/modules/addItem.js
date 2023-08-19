import { renderCartItems } from "./renderCartItems";
import { sumPrices } from "./sumPrices";
import { setData, getData } from './storage';

export const addItem = () => {
  const cardContainer = document.querySelector('.cards__list');
  const counter = document.querySelector('#cart-counter');

  cardContainer.addEventListener('click', evt => {
    if (evt.target.closest('.card__button-add')) {
      const card = evt.target.closest('.card');
      const id = card.getAttribute('data-id');
      const items = document.querySelectorAll('.cart__item');

      const dataArray = getData('cart');
      let isMatch = false;
      counter.textContent = +counter.textContent + 1;

      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].id === id) {
          isMatch = true;
          break;
        } else {
          isMatch = false;
        }
      }

      if (!isMatch) {
        const data = {
          photo: card.querySelector('.card__img').src,
          title: card.querySelector('.card__title').textContent,
          subtitle: card.querySelector('.card__subtitle').textContent,
          price: card.querySelector('.card__discount').firstChild.textContent,
          id: card.getAttribute('data-id'),
        };

        dataArray.push(data);
        setData('cart', dataArray);

        renderCartItems(data);
      } else {
        items.forEach(item => {
          if (item.getAttribute('data-id') === id) {
            const count = item.querySelector('.cart__amount');
            const price = item.querySelector('.cart__price');

            const basePrice = parseInt(price.getAttribute('data-price').split(' ').join(''));
            const currentPrice = parseInt(price.firstChild.textContent.split(' ').join(''));

            const total = ((basePrice + currentPrice) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

            count.textContent = +count.textContent + 1;
            price.textContent = `${total} ₽`;
          }
        });
      }

      sumPrices();
    }
  });
};
