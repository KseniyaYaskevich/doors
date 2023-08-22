import { renderCartItems } from "./renderCartItems";
import { setData, getData } from './storage';

export const addItem = () => {
  const cardContainer = document.querySelector('.cards__list');

  cardContainer.addEventListener('click', evt => {
    if (evt.target.closest('.card__button-add')) {
      const card = evt.target.closest('.card');
      const id = card.getAttribute('data-id');

      const dataArray = getData('cart');

      let isMatch = false;

      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].id === id) {
          dataArray[i].count++;
          setData('cart', dataArray);
          renderCartItems();

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
          count: 1
        };

        dataArray.push(data);
        setData('cart', dataArray);

        renderCartItems();
      }
    }
  });
};
