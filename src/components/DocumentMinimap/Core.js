export class Core {
  constructor({ selector, container, width, height }) {
    this.containerData = {
      selector,
      root: container,
    };
    this.settings = { width, height };
    this.isMoving = false;
  }

  static from(settings) {
    return new Core(settings);
  }

  setScroll = node => {
    this.scrollElement = node;
  };

  getContainer() {
    const { selector, root } = this.containerData;
    return root.querySelector(selector);
  }

  calculateSizes(items) {
    return [];
  }

  synchronise = ({ scrollTop, scrollHeight }) => {
    if (!this.scrollElement) {
      return;
    }
    const ratioY = this.settings.height / scrollHeight;
    const top = Math.round(ratioY * scrollTop);
    this.scrollElement.style.top = `${top}px`;
  };

  up = e => {
    e.preventDefault();
    this.isMoving = false;
  };

  down = e => {
    e.preventDefault();
    const position = this.getContainer().getBoundingClientRect();
    console.log(position);
    // const pos = this.minimap.getBoundingClientRect()

    // this.x = Math.round(pos.left + this.l + this.w / 2)
    // this.y = Math.round(pos.top + this.t + this.h / 2)

    // this.downState = true
    // this.move(e)
  };

  move = e => {
    e.preventDefault();
    if (!this.isMoving) {
      return;
    }
  };
}
