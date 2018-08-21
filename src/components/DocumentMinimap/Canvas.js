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

  drawEntries({ entries, width, height, padding }) {
    if (!this.canvas) {
      return;
    }
    this.reset();
    entries.map(entry => {
      this.ctx.fillStyle = entry.color;
      const left = Math.min(width, Math.max(0, entry.left - padding));
      const top = Math.min(height, Math.max(0, entry.top - padding));
      this.ctx.fillRect(left, top, entry.width + padding, entry.height + padding);
    });
  }
}
