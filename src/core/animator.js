import Anchor from "./anchor";

class Animator {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.anchors = [];
    this.figures = [];
  }

  /**
   * Create a new Anchor associated with this animator
   */
   createAnchor(initParams, paramFunc) {
     return new Anchor(this, initParams, paramFunc);
   }

   /**
    * Add a new figure to list of subscribers and return it
    */
  createFigure(newFigure) {
    this.figures.push(newFigure);
    return newFigure;
  }

  /**
   * Add an anchor to update on each animation cycle
   */
  subscribeAnchor(newAnchor) {
    this.anchors.push(newAnchor);
  }

  /**
   * Add a figure to draw on each animation cycle
   */
  subscribeFigure(newFigure) {
    this.figures.push(newFigure);
  }

  /**
   * Draw a single frame
   */
  drawFrame() {
    let t = Date.now();

    this.anchors.forEach(anchor => {
      anchor.updateParams(t);
    });

    this.figures.forEach(figure => {
      figure.draw();
    });
  }

  /**
   * Draw animation
   */
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawFrame();
    window.requestAnimationFrame(this.animate.bind(this));
  }
}

export default Animator;
