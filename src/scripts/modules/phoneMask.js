export const phoneMask = () => {
  const phoneInputs = document.querySelectorAll('input[name=phone]');

  const setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  const mask = evt => {
    const matrix = '+7 (___) ___-__-__';
    const def = matrix.replace(/\D/g, "");
    let val = evt.target.value.replace(/\D/g, "");
    let i = 0;

    if (def.length >= val.length) val = def;

    evt.target.value = matrix
      .replace(/./g, a => (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a));

    setCursorPosition(evt.target.value.length, evt.target);
  };

  phoneInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.value = '+7 ';
    });

    input.addEventListener('input', mask, false);
  });
};
