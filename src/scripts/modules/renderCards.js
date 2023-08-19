export const renderCards = () => {
  const cardsList = document.querySelector('.cards__list');

  const url = 'db/cards.json';

  const getData = async url => {
    const response = await fetch(url);
    return await response.json();
  };

  const createElement = data => {
    const elem = document.createElement('li');
    elem.classList.add('cards__item', 'card');
    elem.setAttribute('data-id', data.code);

    elem.insertAdjacentHTML('beforeend', `
            <div class="card__header">
                <p class="card__hit">Хит продаж</p>
                <div>
                    <button class="button"><img src="./images/compare.svg" alt=""></button>
                    <button class="button"><img src="./images/heart.svg" alt=""></button>
                </div>
            </div>
            <img class="card__img" src="images/dbimage/${data.photo}.jpg" alt="Фото двери ${data.title}">
            <div class="card__body">
                <p class="card__stock text text--medium">${data.stock ? 'В наличии' : 'Нет в наличии'}
                    <span class="card__code">Арт.: ${data.code}</span>
                </p>
                <h3 class="card__title title title--medium">${data.name}</h3>
                <p class="card__subtitle">${data.type}</p>
                <div class="card__button-wrapper">
                    <button class="button card__button-add">
                        <svg class="card__icon" width="24" height="24">
                            <use xlink:href="images/sprite.svg#card"></use>
                        </svg>
                    </button>
                    <p class="card__prices">
                        <span class="card__discount title title--medium">${data.discount}<span> ₽</span></span>
                        <span class="card__price">${data.price}<span> ₽</span></span>
                    </p>
                </div>
                <a class="card__link text text--medium" href="#!">Купить в один клик</a>
            </div>
        `);

    return elem;
  };

  getData(url)
    .then(data => {
      data.forEach(item => {
        cardsList.append(createElement(item));
      });
    })
    .catch(error => console.log(error));
};
