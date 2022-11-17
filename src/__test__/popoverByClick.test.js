/**
 * @jest-environment jsdom
 */

import Popover from '../js/popover';

test('The popover should show up, by click on button, and hide after another click', () => {
  document.body.innerHTML = `<div class="form-container">
                            <form id="form" class="some-form">
                              <div class="form-group">
                                <button class="btn" type="button">Click to toggle popover</button>
                              </div>
                            </form>
                          </div>`;

  const btnEl = document.querySelector('.btn');
  new Popover(btnEl, 'Подсказка', 'Нажмите еще раз на кнопку, чтобы скрыть это сообщение');
  const popoverBlock = document.querySelector('.popover-container');

  btnEl.click();
  expect(popoverBlock.className).toBe('popover-container');

  btnEl.click();
  expect(popoverBlock.className).toBe('popover-container hidden');
});
