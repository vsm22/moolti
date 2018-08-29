import AnimationObject from "./animation-element";
import Animator from "./animator";
import positionOnPath from "./position-on-path";
import rotate from "./rotate";
import getRotationAngle from "./get-rotation-angle";

class Wave extends AnimationObject {
  constructor(animator, o) {
    o = o || {};

    super(animator, o);

    this.func = (o.func !== undefined) ? o.func : function(x) { return Math.sin(x) }; // wave function
    this.wf = (o.wf !== undefined) ? o.wf : 1;    // wave frequency (cycles/msec)
    this.wa = (o.wa !== undefined) ? o.wa : 1;    // wave amplitude
    this.wv = (o.wv !== undefined) ? o.wv : 1;    // wave carrier velocity (px/msec)
    this.px0 = (o.px0 !== undefined) ? o.px0 : 0; // beginning of path, x
    this.py0 = (o.py0 !== undefined) ? o.py0 : Math.floor(this.canvas.height / 2); // beginning of path, y
    this.px1 = (o.px1 !== undefined) ? o.px1 : this.canvas.width; // end of path, x
    this.py1 = (o.py1 !== undefined) ? o.py1 : this.py0; // end of path, y
    this.wvw;   // wave visible width
  }

  draw(t) {
    // position along the carrier path
    let cPos = positionOnPath({
      x0: this.px0,
      x1: this.px1,
      y0: this.py0,
      y1: this.py1,
      v: this.wv,
      t: t
    });

    // rotation of carrier path in relation to origin
    let rotAngle = getRotationAngle({
      x0: this.px0,
      x1: this.px1,
      y0: this.py0,
      y1: this.py1
    });

    // wave particle displacement at t
    let wpd = this.wa * this.func(t * this.wf * 2*Math.PI);

    // wave particle center x and y
    let wcx = cPos.x + (wpd * Math.sin(rotAngle));
    let wcy = cPos.y + (wpd * Math.cos(rotAngle));

    this.ctx.beginPath();
    this.ctx.arc(wcx, wcy, 10, 0, 2*Math.PI);
    this.ctx.fill();
  }
}

export default Wave
