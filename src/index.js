import Animator from "./core/animator";
import Figure from "./core/figure";
import Anchor from "./core/anchor";
import Arc from "./figures/arc";
import Transform from "./transformations/transform";

let canvas = window.document.getElementsByTagName("canvas")[0];
let animator = new Animator(canvas);

let anchor1 = animator.createAnchor({},
  Transform()
    .getDistance({"v": 0.1})
    .positionOnLinearPath({"x0": 0, "y0": 0, "x1": 500, "y1": 100})
    .function()
    .go()
);

let arc = new Arc(animator, {
  fillStyle: () => "rgb(" + anchor1.linked("d")() + ",100,120",
  cx: anchor1.linked("x"),
  cy: anchor1.linked("y"),
  r: 10
});

animator.animate();
