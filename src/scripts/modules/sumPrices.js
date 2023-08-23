export const sumPrices = () => {
  const cartSums = document.querySelectorAll('.cart__sum');
  const cart = document.querySelector('#cart');
  const items = cart.querySelectorAll('.cart__item');
  let sum = 0;

  items.forEach(item => {
    const price = item.querySelector('.cart__price');
    const currentPrice = parseInt(price.firstChild.textContent.split(' ').join(''));

    sum += currentPrice;
  });

  const total = (sum + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  cartSums.forEach(item => item.textContent = `Сумма заказа: ${total} ₽`);
};
