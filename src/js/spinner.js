import { Spinner } from 'spin.js';
const spinerContainer = document.querySelector('.js-backdrop');

var opts = {
  lines: 14, // The number of lines to draw
  length: 22, // The length of each line
  width: 16, // The line thickness
  radius: 47, // The radius of the inner circle
  scale: 1.25, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#6d8434', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const spinner = new Spinner(opts);

export const spinnerPlay = () => {
  spinerContainer.classList.remove('is-hidden');
  spinner.spin(spinerContainer);
};

export const spinnerStop = () => {
  spinerContainer.classList.add('is-hidden');
  spinner.stop();
};
