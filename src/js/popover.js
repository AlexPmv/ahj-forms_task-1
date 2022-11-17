export default class Popover {
  constructor(anchorEl, messageHeader, message) {
    this.anchorEl = anchorEl;
    this.message = message;
    this.messageHeader = messageHeader;
    this.createPopoverBlock();
    this.addEventOnAnchorEl();
  }

  createPopoverBlock() {
    const popoverBlock = document.createElement('div');
    popoverBlock.className = 'popover-container hidden';

    const popoverHeader = document.createElement('h4');
    popoverHeader.classList.add('popover-header');
    popoverHeader.innerText = this.messageHeader;

    const popoverMessage = document.createElement('p');
    popoverMessage.classList.add('popover-text');
    popoverMessage.innerText = this.message;

    popoverBlock.appendChild(popoverHeader);
    popoverBlock.appendChild(popoverMessage);

    document.body.appendChild(popoverBlock);
  }

  addEventOnAnchorEl() {
    this.anchorEl.addEventListener('click', () => {
      const popover = document.querySelector('.popover-container');
      const { left, top, width } = this.anchorEl.getBoundingClientRect();
      popover.classList.toggle('hidden');

      popover.style.width = `${width + 50}px`;
      popover.style.left = `${left + (width / 2) - (popover.offsetWidth / 2)}px`;
      popover.style.top = `${top - popover.offsetHeight - 5}px`;
    });
  }
}
