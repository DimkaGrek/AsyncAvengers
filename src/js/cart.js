import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';
const itemsList = document.querySelector('.js-items-list');
new SimpleBar(itemsList, { autoHide: false });
