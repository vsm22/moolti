/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animator = __webpack_require__(16);

var _animator2 = _interopRequireDefault(_animator);

var _figure = __webpack_require__(12);

var _figure2 = _interopRequireDefault(_figure);

var _anchor = __webpack_require__(17);

var _anchor2 = _interopRequireDefault(_anchor);

var _arc = __webpack_require__(11);

var _arc2 = _interopRequireDefault(_arc);

var _transform = __webpack_require__(13);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = window.document.getElementsByTagName("canvas")[0];
var animator = new _animator2.default(canvas);

var anchor1 = animator.createAnchor({}, (0, _transform2.default)().getDistance({ "v": 0.1 }).positionOnLinearPath({ "x0": 0, "y0": 0, "x1": 500, "y1": 100 }).function().go());

var arc = new _arc2.default(animator, {
  fillStyle: function fillStyle() {
    return "rgb(" + anchor1.linked("d")() + ",100,120";
  },
  cx: anchor1.linked("x"),
  cy: anchor1.linked("y"),
  r: 10
});

animator.animate();

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _figure = __webpack_require__(12);

var _figure2 = _interopRequireDefault(_figure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arc = function (_Figure) {
  _inherits(Arc, _Figure);

  function Arc(animator, params) {
    _classCallCheck(this, Arc);

    params = Object.assign({
      cx: 0,
      cy: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      anticlockwise: false
    }, params);

    return _possibleConstructorReturn(this, (Arc.__proto__ || Object.getPrototypeOf(Arc)).call(this, animator, params));
  }

  _createClass(Arc, [{
    key: "draw",
    value: function draw() {
      _get(Arc.prototype.__proto__ || Object.getPrototypeOf(Arc.prototype), "draw", this).call(this);
      this.ctx.beginPath();
      this.ctx.arc(this.params.cx, this.params.cy, this.params.r, this.params.startAngle, this.params.endAngle, this.params.antiClockwise);
      this.ctx.fill();
    }
  }]);

  return Arc;
}(_figure2.default);

exports.default = Arc;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Abstract class representing a single figure in the animation
 */
var Figure = function () {
  function Figure(animator, params) {
    _classCallCheck(this, Figure);

    this.animator = animator;
    this.canvas = this.animator.canvas;
    this.ctx = this.animator.ctx;

    this.params = {};
    this.linkedParams = {};

    params = Object.assign({
      fillStyle: "#000",
      strokeStyle: "#000",
      lineWidth: 1
    }, params);

    this.updateParams(params);

    this.subFigures = [];

    this.animator.subscribeFigure(this);
  }

  _createClass(Figure, [{
    key: "updateParams",
    value: function updateParams(params) {
      var _this = this;

      Object.keys(params).forEach(function (key) {
        if (typeof params[key] === "function") {
          _this.linkedParams[key] = params[key];
        }
      });

      this.params = Object.assign(this.params, params);
      this.updateLinkedParams();
    }
  }, {
    key: "updateLinkedParams",
    value: function updateLinkedParams() {
      var _this = this;

      Object.keys(this.linkedParams).forEach(function (key) {
        _this.params[key] = _this.linkedParams[key]();
      });
    }

    /**
     * Add a subFigure to this figure
     */

  }, {
    key: "addSubFigure",
    value: function addSubFigure(newSubFigure) {
      this.subFigures.push(newSubFigure);
    }

    /**
     * Remove a subfigure from this figure
     */

  }, {
    key: "removeSubFigure",
    value: function removeSubFigure(targetSubFigure) {
      this.subFigures = this.subFigures.filter(function (subFigure) {
        return subFigure !== targetSubFigure;
      });
    }

    /**
     * Set styles for the canvas context prior to drawing this AnimationElement
     */

  }, {
    key: "setStyles",
    value: function setStyles() {
      this.ctx.strokeStyle = this.params.strokeStyle;
      this.ctx.fillStyle = this.params.fillStyle;
    }

    /**
     * Abstract draw method each AnimationElement implementation must override
     */

  }, {
    key: "draw",
    value: function draw() {
      this.subFigures.forEach(function (subFigure) {
        subFigure.draw();
      });
      this.updateLinkedParams();
      this.setStyles();
    }
  }]);

  return Figure;
}();

exports.default = Figure;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rotate = __webpack_require__(14);

var _rotate2 = _interopRequireDefault(_rotate);

var _getDistance = __webpack_require__(15);

var _getDistance2 = _interopRequireDefault(_getDistance);

var _positionOnLinearPath = __webpack_require__(18);

var _positionOnLinearPath2 = _interopRequireDefault(_positionOnLinearPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TimeMapping
 */
var Transform = function Transform(callStack) {
  callStack = callStack !== undefined ? callStack : [];

  function recursiveTransform(func) {
    return function (initParams) {
      callStack.push(function (callParams) {
        return func(Object.assign({}, initParams, callParams));
      });
      return Transform(callStack);
    };
  }

  return {
    getDistance: recursiveTransform(_getDistance2.default),
    rotate: recursiveTransform(_rotate2.default),
    positionOnLinearPath: recursiveTransform(_positionOnLinearPath2.default),

    go: function go() {
      return function (callParams) {
        for (var i = 0; i < callStack.length; ++i) {
          callParams = callStack[i](callParams);
        }
        return callParams;
      };
    }
  };
};

exports.default = Transform;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (o) {
  var rotAngle = o.rotAngle !== undefined ? o.rotAngle : 0;
  var x = o.x !== undefined ? o.x : 0;
  var y = o.y !== undefined ? o.y : 0;
  var x0 = o.x0 !== undefined ? o.x0 : 0; // x origin
  var y0 = o.y0 !== undefined ? o.y0 : 0; // y origin

  var newX = void 0,
      newY = void 0;

  var hyp = Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0)); // hypotenuse

  if (hyp === 0) {
    newX = x;
    newY = y;
  } else {
    var origAngle = Math.acos(Math.abs(x - x0) / hyp);
    origAngle = x >= x0 && y >= y0 ? origAngle // 1st quadrant
    : x < x0 && y >= y0 ? Math.PI - origAngle : x < x0 && y < y0 ? Math.PI + origAngle : 2 * Math.PI - origAngle;

    var newAngle = origAngle + rotAngle;

    newX = x0 + Math.cos(newAngle) * hyp;
    newY = y0 + Math.sin(newAngle) * hyp;
  }

  return Object.assign({}, o, { x: newX, y: newY });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDistance;
function getDistance(o) {
  o = Object.assign({
    "t": 0,
    "t0": 0,
    "d": 0,
    "d0": 0,
    "dmax": -1,
    "v": 0,
    "a": 0
  }, o);

  o["d"] = o["v"] * (o["t"] - o["t0"]) + 0.5 * o["a"] * (o["t"] - o["t0"]) * (o["t"] - o["t0"]);

  if (o["dmax"] >= 0) {
    o["d"] = o["d"] % o["dmax"];
  }

  return o;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _anchor = __webpack_require__(17);

var _anchor2 = _interopRequireDefault(_anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animator = function () {
  function Animator(canvas) {
    _classCallCheck(this, Animator);

    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.anchors = [];
    this.figures = [];
  }

  /**
   * Create a new Anchor associated with this animator
   */


  _createClass(Animator, [{
    key: "createAnchor",
    value: function createAnchor(initParams, paramFunc) {
      return new _anchor2.default(this, initParams, paramFunc);
    }

    /**
     * Add a new figure to list of subscribers and return it
     */

  }, {
    key: "createFigure",
    value: function createFigure(newFigure) {
      this.figures.push(newFigure);
      return newFigure;
    }

    /**
     * Add an anchor to update on each animation cycle
     */

  }, {
    key: "subscribeAnchor",
    value: function subscribeAnchor(newAnchor) {
      this.anchors.push(newAnchor);
    }

    /**
     * Add a figure to draw on each animation cycle
     */

  }, {
    key: "subscribeFigure",
    value: function subscribeFigure(newFigure) {
      this.figures.push(newFigure);
    }

    /**
     * Draw a single frame
     */

  }, {
    key: "drawFrame",
    value: function drawFrame() {
      var t = Date.now();

      this.anchors.forEach(function (anchor) {
        anchor.updateParams(t);
      });

      this.figures.forEach(function (figure) {
        figure.draw();
      });
    }

    /**
     * Draw animation
     */

  }, {
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawFrame();
      window.requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return Animator;
}();

exports.default = Animator;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An anchor represents a store of parameters that may change
 * with each animation frame according to a param function
 */
var Anchor = function () {
  function Anchor(animator, initParams, paramFunc) {
    _classCallCheck(this, Anchor);

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


  _createClass(Anchor, [{
    key: "updateParams",
    value: function updateParams(t) {
      var _this = this;

      if (typeof this.paramFunc === "function") {
        var newParams = this.paramFunc(Object.assign(_this.params, { t: t }));

        Object.keys(newParams).forEach(function (key) {
          _this.params[key] = newParams[key];
        });
      }
    }

    /**
     * Return the params for this anchor
     */

  }, {
    key: "getParams",
    value: function getParams() {
      var _this = this;

      return _this.params;
    }

    /**
     * Return a function to retrieve a keyed linked param
     */

  }, {
    key: "getLinkedParam",
    value: function getLinkedParam(key) {
      var _this = this;
      return function () {
        return _this.params[key];
      };
    }

    /**
     * Alias for getLinkedParam
     */

  }, {
    key: "linked",
    value: function linked(key) {
      return this.getLinkedParam(key);
    }
  }]);

  return Anchor;
}();

exports.default = Anchor;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (o) {
  o = Object.assign({
    "x": 0,
    "y": 0,
    "x0": 0,
    "y0": 0,
    "x1": 0,
    "y1": 0,
    "d": 0
  }, o);

  var op = Math.abs(o["y1"] - o["y0"]); // opposite
  var a = Math.abs(o["x1"] - o["x0"]); // adjacent
  var h = Math.sqrt(op * op + a * a); // hypotenuse
  var th = Math.asin(op / h); // theta (angle)

  var xDist = o["d"] % h * Math.cos(th); // x-distance
  var yDist = o["d"] % h * Math.sin(th); // y-distance

  o["x"] = o["x1"] > o["x0"] ? o["x0"] + xDist : o["x0"] - xDist;
  o["y"] = o["y1"] > o["y0"] ? o["y0"] + yDist : o["y0"] - yDist;

  return o;
};

/***/ })
/******/ ]);