import { trapTabKey } from "./trapTabKey";

export const popupCall = () => {
  const body = document.querySelector('.page-body');
  const buttons = document.querySelectorAll('.request-call');
  const popup = body.querySelector('.popup-call');
  const popupDialog = popup.querySelector('.popup-dialog');
  let lastFocusedElement;

  const closeModal = evt => {
    if (evt.target.closest('.contacts__button')) {
      body.classList.remove('page-body--lock');
    }

    popup.classList.remove('popup--visible');
    popupDialog.classList.remove('popup-dialog--visible');

    lastFocusedElement.focus();
  };

  const openModal = event => {
    body.classList.add('page-body--lock');
    popup.classList.add('popup--visible');
    popupDialog.classList.add('popup-dialog--visible');

    lastFocusedElement = document.activeElement;

    trapTabKey(popup);

    popup.addEventListener('click', evt => {
      if (evt.target.closest('.popup__close') || evt.target.classList.contains('popup')) {
        closeModal(event);
      }
    });

    popup.addEventListener('keydown', evt => {
      if (evt.keyCode === 27 || evt.key === 'Escape' || evt.key === 'Esc') {
        closeModal(event);
      }
    });
  };

  buttons.forEach(button => button.addEventListener('click', openModal));
};
