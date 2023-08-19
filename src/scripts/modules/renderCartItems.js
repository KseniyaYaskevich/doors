export const renderCartItems = data => {
  const container = document.querySelector('.cart__list');

  const createElement = data => {
    const smallPhoto = data.photo.replace('.jpg', '_small.jpg');

    const elem = document.createElement('li');
    elem.classList.add('cart__item');
    elem.setAttribute('data-id', data.id);

    elem.insertAdjacentHTML('beforeend', `
                <img class="cart__image" src="${smallPhoto}" width="56" height="60" alt="Фото двери ${data.title}">
                <div class="cart__body">
                    <h3 class="cart__title text text--medium">${data.title}</h3>
                    <p class="cart__subtitle caption caption--medium">${data.subtitle}</p>
                </div>
                <div class="cart__inner">
                    <p class="cart__price text text--medium" data-price="${data.price}">${data.price} ₽</p>
                    <div class="cart__counter">
                        <button class="button cart__change cart__change--decrease">-</button>
                        <p class="cart__amount">1</p>
                        <button class="button cart__change cart__change--increase">+</button>
                    </div>
                </div>
        `);

    return elem;
  };

  container.append(createElement(data));
};
