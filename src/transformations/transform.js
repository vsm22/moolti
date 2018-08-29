import rotate from "./rotate";
import getDistance from "./get-distance";
import positionOnLinearPath from "./position-on-linear-path";

/**
 * TimeMapping
 */
const Transform = function(callStack) {
  callStack = (callStack !== undefined) ? callStack : [];

  function recursiveTransform(func) {
    return function(initParams) {
        callStack.push(
          function(callParams) {
            return func(Object.assign({}, initParams, callParams));
          }
        );
        return Transform(callStack);
    }
  }

  return {
    getDistance: recursiveTransform(getDistance),
    rotate: recursiveTransform(rotate),
    positionOnLinearPath: recursiveTransform(positionOnLinearPath),

    go: function() {
      return function(callParams) {
        for (let i = 0; i < callStack.length; ++i) {
          callParams = callStack[i](callParams);
        }
        return callParams;
      }
    }
  }
}

export default Transform
