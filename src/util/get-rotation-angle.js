/**
 * Get the rotation angle for a vector from positive horizontal vector (0 rad)
 */
export default function(o) {
  o = o || {};

  const x0 = (o.x0 !== undefined) ? o.x0 : 0;
  const x1 = (o.x1 !== undefined) ? o.x1 : 0;
  const y0 = (o.y0 !== undefined) ? o.y0 : 0;
  const y1 = (o.y1 !== undefined) ? o.y1 : 0;

  let hyp = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
  let angle = Math.asin(Math.abs(y1 - y0) / hyp);

  // compensate according to which quadrant the vector is in
  angle = (x1 >= x0 && y1 >= y0) ? angle
          : (x1 < x0 && y1 >= y0) ? Math.PI - angle
          : (x1 < x0 && y1 <= y0) ? Math.PI + angle
          : 2*Math.PI - angle;

  return angle;
}
