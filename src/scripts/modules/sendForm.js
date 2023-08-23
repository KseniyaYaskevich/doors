export const sendForm = () => {
  const modal = document.querySelector('.popup-call');
  const form = modal.querySelector('.popup__form');
  const formElements = form.querySelectorAll('input');
  const checkbox = modal.querySelector('.form__checkbox-input');
  const button = modal.querySelector('.form__button');

  const sendData = async data => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  const validate = list => {
    let success = true;

    list.forEach(item => {
      if (item.getAttribute('name') === 'phone') {
        if (!item.value.match(/\+7\s?[(]{0,1}[0-9]{3}[)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/)) {
          item.classList.add('form__input--error');
          success = false;
        } else {
          item.classList.remove('form__input--error');
        }
      }

      if (item.getAttribute('name') === 'name') {
        if (!item.value.match(/^[а-яёa-z]+$/gi)) {
          item.classList.add('form__input--error');
          success = false;
        } else {
          item.classList.remove('form__input--error');
        }
      }

      if (item.getAttribute('name') === 'checkbox') {
        if (!item.checked) {
          item.classList.add('form__input--error');
          success = false;
        } else {
          item.classList.remove('form__input--error');
        }
      }
    });

    return success;
  };

  const submitForm = form => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          console.log(data);

          formElements.forEach(input => {
            input.value = '';
            input.classList.remove('form__input--error');
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  };

  try {
    form.addEventListener('submit', evt => {
      evt.preventDefault();

      submitForm(form);
    });

    form.addEventListener('input', evt => {
      evt.preventDefault();

      formElements.forEach(input => {
        if (input.classList.contains('form__input--error')) {
          input.classList.remove('form__input--error');
        }
      });
    });

  } catch (error) {
    console.log(error.message);
  }

  checkbox.addEventListener('click', () => {
    if (!checkbox.checked) {
      button.setAttribute('disabled', true);
    } else {
      button.removeAttribute('disabled');
    }
  });
};
