export class Canvas {
  constructor(canvas, settings) {
    this.canvas = canvas;
    this.settings = settings;
    this.ctx = canvas ? canvas.getContext('2d') : null;
  }

  static empty() {
    return new Canvas(undefined, undefined);
  }

  static from(canvas, settings) {
    return new Canvas(canvas, settings);
  }

  scroll() {
    if (!this.canvas) {
      return;
    }
  }

  reset() {
    if (!this.canvas) {
      return;
    }
    this.ctx.fillStyle = this.settings.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawEntries(entries) {
    if (!this.canvas) {
      return;
    }
    this.reset();
    entries.map(entry => {
      this.ctx.fillStyle = entry.color;
      this.ctx.fillRect(entry.top, entry.left, entry.width, entry.height);
    });
  }
}
