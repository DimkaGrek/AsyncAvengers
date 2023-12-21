import FoodApi from './FoodApi';
import { openModalEmailSub, openModalEmailSubError } from './modal/modal';

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
    } else {
      console.log(error);
    }
  }
  event.target.reset();
};

refs.form.addEventListener('submit', onFormSubmit);
