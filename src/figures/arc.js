import Figure from "../core/figure";

class Arc extends Figure {
  constructor(animator, params) {
    params = Object.assign({
      cx: 0,
      cy: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2*Math.PI,
      anticlockwise: false
    }, params);

    super(animator, params);
  }

  draw() {
    super.draw();
    this.ctx.beginPath();
    this.ctx.arc(this.params.cx, this.params.cy, this.params.r, this.params.startAngle, this.params.endAngle, this.params.antiClockwise);
    this.ctx.fill();
  }
}

export default Arc
