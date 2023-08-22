import { renderCartItems } from "./renderCartItems";
import { getData, setData } from "./storage";

export const changeCartItem = () => {
  const cartList = document.querySelector('.cart__list');

  const changeItem = evt => {
    const cartData = getData('cart');

    if (evt.target.closest('.cart__change')) {
      const item = evt.target.closest('.cart__item');
      const id = item.getAttribute('data-id');

      if (evt.target.closest('.cart__change--decrease')) {
        for (let i = 0; i < cartData.length; i++) {
          if (cartData[i].id === id) {
            if (cartData[i].count <= 1) {
              item.remove();
              cartData.splice(i, 1);
              setData('cart', cartData);
            } else {
              cartData[i].count--;
              setData('cart', cartData);
            }
          }
        }
      }

      if (evt.target.closest('.cart__change--increase')) {
        for (let i = 0; i < cartData.length; i++) {
          if (cartData[i].id === id) {
            cartData[i].count++;
            setData('cart', cartData);
          }
        }
      }

      renderCartItems();
    }
  };

  cartList.addEventListener('click', changeItem);
};
