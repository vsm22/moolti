export default function (o) {
  o = Object.assign({
    "x": 0,
    "y": 0,
    "x0": 0,
    "y0": 0,
    "x1": 0,
    "y1": 0,
    "d": 0
  }, o);

  let op = Math.abs(o["y1"] - o["y0"]);     // opposite
  let a = Math.abs(o["x1"] - o["x0"]);      // adjacent
  let h = Math.sqrt(op*op + a*a); // hypotenuse
  let th = Math.asin(op / h);     // theta (angle)

  let xDist = (o["d"] % h) * Math.cos(th);   // x-distance
  let yDist = (o["d"] % h) * Math.sin(th);   // y-distance

  o["x"] = (o["x1"] > o["x0"]) ? o["x0"] + xDist : o["x0"] - xDist;
  o["y"] = (o["y1"] > o["y0"]) ? o["y0"] + yDist : o["y0"] - yDist;

  return o;
}
