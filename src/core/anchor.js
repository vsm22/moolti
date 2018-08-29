/**
 * An anchor represents a store of parameters that may change
 * with each animation frame according to a param function
 */
class Anchor {
  constructor(animator, initParams, paramFunc) {
    this.animator = animator;
    this.canvas = this.animator.canvas;
    this.ctx = this.animator.ctx;
    this.params = initParams || {};
    this.paramFunc = paramFunc;
    this.animator.subscribeAnchor(this);
  }

  /**
   * Update the params for this anchor according to the param function
   */
  updateParams(t) {
    let _this = this;

    if (typeof this.paramFunc === "function") {
      let newParams = this.paramFunc(Object.assign(_this.params, {t: t}));

      Object.keys(newParams).forEach(key => {
        _this.params[key] = newParams[key];
      });
    }
  }

  /**
   * Return the params for this anchor
   */
  getParams() {
    const _this = this;

    return _this.params;
  }

  /**
   * Return a function to retrieve a keyed linked param
   */
  getLinkedParam(key) {
    const _this = this;
    return function() {
      return _this.params[key];
    }
  }

  /**
   * Alias for getLinkedParam
   */
  linked(key) {
    return this.getLinkedParam(key);
  }
}

export default Anchor
