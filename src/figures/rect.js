import Figure from "../core/figure";

class Rect extends Figure {

    constructor(animator, params) {

        params = Object.assign({
            x: 0,
            y: 0,
            width: 10,
            height: 10
        }, params);

        super(animator, params);
  }

  draw() {
    super.draw();
    this.ctx.beginPath();
    this.ctx.rect(this.params.x, this.params.y, this.params.width, this.params.height);
    this.ctx.fill();
  }
}

export default Rect