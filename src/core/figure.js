/**
 * Abstract class representing a single figure in the animation
 */
class Figure {
  constructor(animator, params) {
    this.animator = animator;
    this.canvas = this.animator.canvas;
    this.ctx = this.animator.ctx;

    this.params = {};
    this.linkedParams = {};

    params = Object.assign({
      fillStyle: "#000",
      strokeStyle: "#000",
      lineWidth: 1
    }, params);

    this.updateParams(params);

    this.subFigures = [];

    this.animator.subscribeFigure(this);
  }

  updateParams(params) {
    const _this = this;

    Object.keys(params).forEach(key => {
      if (typeof params[key] === "function") {
        _this.linkedParams[key] = params[key];
      }
    });

    this.params = Object.assign(this.params, params);
    this.updateLinkedParams();
  }

  updateLinkedParams() {
    const _this = this;

    Object.keys(this.linkedParams).forEach(key => {
      _this.params[key] = _this.linkedParams[key]();
    });
  }

  /**
   * Add a subFigure to this figure
   */
  addSubFigure(newSubFigure) {
    this.subFigures.push(newSubFigure);
  }

  /**
   * Remove a subfigure from this figure
   */
  removeSubFigure(targetSubFigure) {
    this.subFigures = this.subFigures.filter(subFigure => {
      return subFigure !== targetSubFigure
    });
  }

  /**
   * Set styles for the canvas context prior to drawing this AnimationElement
   */
  setStyles() {
    this.ctx.strokeStyle = this.params.strokeStyle;
    this.ctx.fillStyle = this.params.fillStyle;
  }

  /**
   * Abstract draw method each AnimationElement implementation must override
   */
  draw() {
    this.subFigures.forEach(subFigure => {
      subFigure.draw();
    });
    this.updateLinkedParams();
    this.setStyles();
  }
}

export default Figure
