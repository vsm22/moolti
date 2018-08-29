/**
 * Rotate a point clockwise around origin
 */
export default function(o) {
  let rotAngle = (o.rotAngle !== undefined) ? o.rotAngle : 0;
  let x = (o.x !== undefined) ? o.x : 0;
  let y = (o.y !== undefined) ? o.y : 0;
  let x0 = (o.x0 !== undefined) ? o.x0 : 0; // x origin
  let y0 = (o.y0 !== undefined) ? o.y0 : 0; // y origin

  let newX, newY;

  let hyp = Math.sqrt((x-x0)*(x-x0) + (y-y0)*(y-y0)); // hypotenuse

  if (hyp === 0) {
    newX = x;
    newY = y;
  } else {
    let origAngle = Math.acos(Math.abs(x - x0) / hyp);
    origAngle = (x >= x0 && y >= y0) ? origAngle // 1st quadrant
                 : (x < x0 && y >= y0) ? Math.PI - origAngle
                 : (x < x0 && y < y0) ? Math.PI + origAngle
                 : 2*Math.PI - origAngle;

    let newAngle = origAngle + rotAngle;

    newX = x0 + Math.cos(newAngle) * hyp;
    newY = y0 + Math.sin(newAngle) * hyp;
  }

  return Object.assign({}, o, {x: newX, y: newY});
}
