export const sumPrices = () => {
  const cartSum = document.querySelector('.cart__sum');
  const items = document.querySelectorAll('.cart__item');
  let sum = 0;

  items.forEach(item => {
    const price = item.querySelector('.cart__price');
    const currentPrice = parseInt(price.firstChild.textContent.split(' ').join(''));

    sum += currentPrice;
  });

  const total = (sum + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  cartSum.textContent = `Сумма заказа: ${total} ₽`;
};
