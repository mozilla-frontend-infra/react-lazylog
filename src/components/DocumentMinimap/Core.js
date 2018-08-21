export class Core {
  constructor({ selector, container, width, height, updateContainerScroll }) {
    this.containerData = {
      selector,
      root: container,
    };
    this.settings = { width, height };
    this.isMoving = false;
    this.updateContainerScroll = updateContainerScroll;
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
    this.scrollTo(top);
  };

  scrollTo(px) {
    if (!this.scrollElement) {
      return;
    }
    this.scrollElement.style.top = `${px}px`;
  }

  onMouseUp = e => {
    e.preventDefault();
    this.isMoving = false;
  };

  onMouseDown = e => {
    this.isMoving = true;
    this.move(e);
  };

  move = e => {
    e.preventDefault();
    if (!this.isMoving) {
      return;
    }
    let event;
    if (e.type.match(/touch/)) {
      if (e.touches.length > 1) {
        return;
      }
      event = e.touches[0];
    } else {
      event = e;
    }
    const container = this.getContainer();
    const parentRect = this.scrollElement.parentNode.getBoundingClientRect();
    // TODO center on that point?
    const scrollDiff = event.clientY - parentRect.y;
    const ratioY = this.settings.height / container.scrollHeight;
    const containerScroll = Math.floor(scrollDiff / ratioY);
    this.scrollTo(scrollDiff);
    this.updateContainerScroll(container.scrollTop + containerScroll);
  };
}
