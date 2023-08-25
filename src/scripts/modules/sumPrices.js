import { getData } from './storage';

export const sumPrices = () => {
  const cartSums = document.querySelectorAll('.cart__sum');
  const data = getData('cart');

  let sum = 0;

  data.forEach(item => {
    const price = parseInt(item.price.split(' ').join('')) * item.count;
    sum += price;
  });

  const total = (sum + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  cartSums.forEach(item => item.textContent = `Сумма заказа: ${total} ₽`);
};
