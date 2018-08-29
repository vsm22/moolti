import rotate from "./rotate";
import positionOnPath from "./position-on-path";

class Transform {
  constructor(data) {
    const _this = this;

    _this.data = {
      positionOnPath: _this.positionOnPath,
      rotate: _this.rotate
    };
  }

  recursiveTransform(func) {
    const _this = this;

    return function(initParams) {
      _this.data = func(Object.assign({}, initParams, _this.data));
      return _this.data;
    }
  }

  positionOnPath() {
    return this.recursiveTransform(positionOnPath);
  }

  rotate() {
    return this.recursiveTransform(rotate);
  }
}

export default Transform
