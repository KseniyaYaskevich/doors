export const categoriesTabs = () => {
  const body = document.querySelector('.page-body');
  const header = body.querySelector('.header');
  const tapPanel = body.querySelector('.categories');
  const tabs = tapPanel.querySelectorAll('.categories-nav__item');
  const tabContent = tapPanel.querySelectorAll('.categories-content__item');

  const closeCategories = evt => {
    if (evt.target.closest('.header--active')) {
      if (!evt.target.closest('.categories')) {
        body.classList.remove('page-body--lock');
        header.classList.remove('header--active');

        tabs.forEach((tab, index) => {
          tab.classList.remove('categories-nav__item--active');
          tabContent[index].classList.remove('categories-content__item--active');
        });
      }
    }
  };

  tapPanel.addEventListener('click', evt => {
    if (evt.target.closest('.categories-nav__item')) {
      const tabBtn = evt.target.closest('.categories-nav__item');

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.toggle('categories-nav__item--active');
          tabContent[index].classList.toggle('categories-content__item--active');

          if (tab.classList.contains('categories-nav__item--active')) {
            body.classList.add('page-body--lock');
            header.classList.add('header--active');

            window.addEventListener('click', closeCategories, true);
          } else {
            body.classList.remove('page-body--lock');
            header.classList.remove('header--active');
          }
        } else {
          tab.classList.remove('categories-nav__item--active');
          tabContent[index].classList.remove('categories-content__item--active');
        }
      });
    }
  });
};
