export const trapTabKey = elem => {
  const focusableElementsString = `a[href], area[href], input:not([disabled]), 
  select:not([disabled]), textarea:not([disabled]), button:not([disabled]), 
  iframe, object, embed, [tabindex="0"], [contenteditable]`;
  let focusableElements = elem.querySelectorAll(focusableElementsString);

  focusableElements = Array.prototype.slice.call(focusableElements);

  const firstTabStop = focusableElements[0];
  const lastTabStop = focusableElements[focusableElements.length - 1];

  firstTabStop.focus();

  elem.addEventListener('keydown', evt => {
    if (evt.keyCode === 9) {
      if (evt.shiftKey) {
        if (document.activeElement === firstTabStop) {
          evt.preventDefault();
          lastTabStop.focus();
        }
      } else {
        if (document.activeElement === lastTabStop) {
          evt.preventDefault();
          firstTabStop.focus();
        }
      }
    }
  }, { once: true });
};
