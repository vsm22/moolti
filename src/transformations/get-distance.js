export default function getDistance(o) {
  o = Object.assign({
      "t": 0,
      "t0": 0,
      "d": 0,
      "d0": 0,
      "dmax": -1,
      "v": 0,
      "a": 0
  }, o);

  o["d"] = (o["v"] * (o["t"] - o["t0"]))  + (0.5 * o["a"] * (o["t"] - o["t0"]) * (o["t"] - o["t0"]));

  if (o["dmax"] >= 0) {
    o["d"] = o["d"] % o["dmax"];
  }

  return o;
}
