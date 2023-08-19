import { trapTabKey } from "./trapTabKey";

export const menu = () => {
  const body = document.querySelector('.page-body');
  const header = body.querySelector('.header');
  const tapPanel = header.querySelector('.tabs');
  const tabs = header.querySelectorAll('.tabs-nav__item');
  const сontent = header.querySelector('.tabs-content');
  const tabContent = header.querySelectorAll('.tabs-content__item');

  const distance = header.clientHeight + tapPanel.clientHeight;
  let lastFocusedElement;

  tapPanel.addEventListener('click', evt => {
    if (evt.target.closest('.tabs-nav__item')) {
      const tabBtn = evt.target.closest('.tabs-nav__item');

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.toggle('tabs-nav__item--active');
          tabContent[index].classList.toggle('tabs-content__item--active');

          if (tab.classList.contains('tabs-nav__item--active')) {
            body.classList.add('page-body--lock');
            сontent.classList.add('tabs-content--visible');
            сontent.style.height = `calc(100vh - ${distance}px)`;

            lastFocusedElement = document.activeElement;
            trapTabKey(header);

          } else {
            body.classList.remove('page-body--lock');
            сontent.classList.remove('tabs-content--visible');
            сontent.style.height = `0px`;

            lastFocusedElement.focus();
          }
        } else {
          tab.classList.remove('tabs-nav__item--active');
          tabContent[index].classList.remove('tabs-content__item--active');
        }
      });
    }
  });
};
