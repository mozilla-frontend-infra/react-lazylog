import { resizeEntries } from './utils';

export class Core {
  constructor({ selector, container, width, height, updateContainerScroll, scrollHeight }) {
    this.containerData = {
      selector,
      root: container,
    };
    this.settings = { width, height, scrollHeight };
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

  calculateSizes(lines, rowHeight, fontSize) {
    const { width, height } = this.settings;
    const { scrollWidth, scrollHeight } = this.getContainer();

    const ratioX = width / scrollWidth;
    const ratioY = height / scrollHeight;

    const lineHeight = ratioY * rowHeight;
    const charWidth = ratioX * fontSize;
    return { entries: resizeEntries(lines, lineHeight, charWidth), width, height, padding: 1 };
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

  inBounds(number) {
    if (number < 0) {
      return 0;
    }
    const maxTop = this.settings.height - this.settings.scrollHeight;
    if (number > maxTop) {
      return maxTop;
    }
    return number;
  }

  onMouseUp = e => {
    e.preventDefault();
    this.isMoving = false;
  };

  onMouseDown = e => {
    this.isMoving = true;
    this.move(e);
  };

  onWheel = e => {
    e.preventDefault();
    const rect = this.scrollElement.getBoundingClientRect();
    this.updateScroll(rect.top + e.deltaY / 2);
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
    this.updateScroll(event.clientY);
  };

  updateScroll(change) {
    const parentRect = this.scrollElement.parentNode.getBoundingClientRect();
    const diff = change - parentRect.y;
    const container = this.getContainer();
    const scrollDiff = this.inBounds(diff - this.settings.scrollHeight / 2);
    const ratioY = this.settings.height / container.scrollHeight;
    const containerScroll = Math.floor(scrollDiff / ratioY);
    this.scrollTo(scrollDiff);
    this.updateContainerScroll(container.scrollTop + containerScroll);
  }
}
