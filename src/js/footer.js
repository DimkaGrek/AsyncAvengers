import FoodApi from './FoodApi';
import { openModalEmailSub, openModalEmailSubError } from './modal/modal';
import iziToast from 'izitoast';

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
      iziToast.warning({
        title: 'Error',
        message: 'The email must be in format: johnsmith125@gmail.com.',
        backgroundColor: '#ff4400b9',
      });
    } else {
      console.log(error);
    }
  }
  event.target.reset();
};

refs.form.addEventListener('submit', onFormSubmit);
