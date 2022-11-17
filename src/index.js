import './css/style.css';
import Popover from './js/popover';

document.addEventListener('DOMContentLoaded', () => {
  const btnEl = document.querySelector('.btn');
  new Popover(btnEl, 'Подсказка', 'Нажмите еще раз на кнопку, чтобы скрыть это сообщение');
});
