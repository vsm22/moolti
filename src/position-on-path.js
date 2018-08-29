/**
 * Find position at time (t) of a particle moving with velocity (v) along linear path ((x0,y0) - (x1,y1))
 */
export default (o) => {
    o = o || {};

    const t = (o.t !== undefined) ? o.t : 0;     // time elapsed
    const x0 = (o.x0 !== undefined) ? o.x0 : 0;   // x beginning of path
    const x1 = (o.x1 !== undefined) ? o.x1 : 100; // x end of path
    const y0 = (o.y0 !== undefined) ? o.y0 : 0;   // y beginning of path
    const y1 = (o.y1 !== undefined) ? o.y1 : 100; // y end of path
    const v = (o.v !== undefined) ? o.v : 0.01;  // velocity (pixels / ms)

    let op = Math.abs(y1 - y0);     // opposite
    let a = Math.abs(x1 - x0);      // adjacent
    let h = Math.sqrt(op*op + a*a); // hypotenuse
    let th = Math.atan(op / a);     // theta (angle)
    let d = (t * v) % h;            // distance at t (mod hypotenuse)

    let xDist = d * Math.cos(th);   // x-distance at t
    let yDist = d * Math.sin(th);   // y-distance at t

    let curX = (x1 > x0) ? x0 + xDist : x0 - xDist;
    let curY = (y1 > y0) ? y0 + yDist : y0 - yDist;

    return Object.assign({}, o, {x: curX, y: curY});
}
