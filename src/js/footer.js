import FoodApi from './FoodApi';
import {
  openModalEmailSub,
  openModalEmailSubError,
  openModalError,
} from './modal/modal';

const refs = {
  form: document.querySelector('.js-footer-form'),
};

const onFormSubmit = async event => {
  event.preventDefault();

  const { email } = event.target;

  try {
    const message = await FoodApi.createSubscription(email.value);
    openModalEmailSub();
  } catch (error) {
    if (error.response.status === 409) {
      openModalEmailSubError();
    } else if (error.response.status === 400) {
      openModalError(
        'Incorrect email',
        'The email must be in format: johnsmith125@gmail.com'
      );
    } else {
      openModalError(
        'Server Issue',
        `We're sorry, but it seems there's an issue with our server. Please try again later.`
      );
    }
  }
  event.target.reset();
};

refs.form.addEventListener('submit', onFormSubmit);
