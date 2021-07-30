import React from 'react';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

// Equality comparison for objects
function isEqual(left, right) {
  var OBJECT_STRING = '[object Object]';

  if (_typeof(left) !== 'object' || _typeof(right) !== 'object') {
    return left === right;
  }

  if (left === null || right === null) return left === right;
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray) return false;
  var leftPlainObject = Object.prototype.toString.call(left) === OBJECT_STRING;
  var rightPlainObject = Object.prototype.toString.call(right) === OBJECT_STRING;
  if (leftPlainObject !== rightPlainObject) return false;
  if (!leftPlainObject && !leftArray) return false;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  var keySet = {};

  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }

  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }

  var allKeys = Object.keys(keySet);

  if (allKeys.length !== leftKeys.length) {
    return false;
  }

  var l = left;
  var r = right;

  var pred = function pred(key) {
    return isEqual(l[key], r[key]);
  };

  return allKeys.every(pred);
}
function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function validateCbInstance(cbInstance) {
  if (cbInstance != null) {
    var site = cbInstance.site;
    var key = cbInstance.publishableKey;
    if (!(site != null && typeof site == "string" && site.length > 0)) return false;
    if (!(key != null && typeof key == "string" && key.length > 0)) return false;
    return true;
  } else return false;
}

var Element = /*#__PURE__*/function (_React$Component) {
  _inherits(Element, _React$Component);

  var _super = _createSuper(Element);

  function Element(props) {
    var _this;

    _classCallCheck(this, Element);

    _this = _super.call(this);
    _this.field = null;
    _this.id = "card-".concat(props.type, "-").concat(genUUID());
    _this.ElementRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Element, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          cbComponent = _this$props.cbComponent,
          type = _this$props.type,
          listeners = _this$props.listeners;
      var options = this.getPropOptions(this.props);
      this.field = cbComponent.createField(type, options).at("#".concat(this.id)); // Attaching listeners if any

      if (listeners) {
        if (listeners.onBlur) this.field.on('blur', listeners.onBlur);
        if (listeners.onFocus) this.field.on('focus', listeners.onFocus);
        if (listeners.onReady) this.field.on('ready', listeners.onReady);
        if (listeners.onChange) this.field.on('change', listeners.onChange);
      }
    }
  }, {
    key: "getPropOptions",
    value: function getPropOptions(props) {
      var icon = props.icon,
          style = props.styles,
          placeholder = props.placeholder,
          ariaLabel = props.ariaLabel;
      return {
        icon: icon,
        style: style,
        placeholder: placeholder,
        ariaLabel: ariaLabel
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevOptions = this.getPropOptions(prevProps);
      var currentOptions = this.getPropOptions(this.props);

      if (!isEqual(prevOptions, currentOptions) && this.field) {
        this.field.update(currentOptions);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.field.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.field.blur();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.field.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return /*#__PURE__*/React.createElement("div", {
        id: this.id,
        ref: this.ElementRef,
        className: className
      }, this.props.children);
    }
  }]);

  return Element;
}(React.Component);

var ComponentDefaultContext = {
  cbComponent: null
};
var ComponentContext = /*#__PURE__*/React.createContext(ComponentDefaultContext);

var ChargebeeComponents = /*#__PURE__*/function (_React$Component) {
  _inherits(ChargebeeComponents, _React$Component);

  var _super = _createSuper(ChargebeeComponents);

  function ChargebeeComponents(props) {
    var _this;

    _classCallCheck(this, ChargebeeComponents);

    _this = _super.call(this);
    _this.state = {
      moduleLoaded: false,
      cbComponent: null,
      cbInstance: null
    };
    return _this;
  }

  _createClass(ChargebeeComponents, [{
    key: "getPropOptions",
    value: function getPropOptions(props) {
      var fonts = props.fonts,
          classes = props.classes,
          icon = props.icon,
          style = props.styles,
          locale = props.locale,
          placeholder = props.placeholder,
          currency = props.currency,
          ariaLabel = props.ariaLabel;
      return {
        fonts: fonts,
        classes: classes,
        locale: locale,
        style: style,
        placeholder: placeholder,
        ariaLabel: ariaLabel,
        icon: icon,
        currency: currency
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var cbComponent = this.state.cbComponent;

      if (cbComponent && this.state.moduleLoaded && cbComponent.status == 0) {
        cbComponent.mount("#".concat(this.id));
      }

      var prevOptions = this.getPropOptions(prevProps);
      var currentOptions = this.getPropOptions(this.props);

      if (!isEqual(prevOptions, currentOptions) && cbComponent) {
        cbComponent.update(currentOptions);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.id = "".concat(this.props.type, "-field-").concat(genUUID());
      var _this$props = this.props,
          type = _this$props.type,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onReady = _this$props.onReady;
      var options = this.getPropOptions(this.props);
      var cbInstance = Chargebee.getInstance();
      cbInstance.load("components").then(function () {
        var cbComponent = cbInstance.createComponent(type, options); // Attach listeners if specified (only applicable for combined field)

        cbComponent.on('ready', onReady);
        cbComponent.on('blur', onBlur);
        cbComponent.on('focus', onFocus);
        cbComponent.on('change', onChange);

        _this2.setState({
          cbComponent: cbComponent,
          cbInstance: cbInstance,
          moduleLoaded: true
        });
      });
    }
  }, {
    key: "tokenize",
    value: function tokenize(additionalData) {
      var cbComponent = this.state.cbComponent;
      return cbComponent.tokenize(additionalData);
    }
  }, {
    key: "authorizeWith3ds",
    value: function authorizeWith3ds(paymentIntent, additionalData, callbacks) {
      var cbComponent = this.state.cbComponent;
      return cbComponent.authorizeWith3ds(paymentIntent, additionalData, callbacks);
    }
  }, {
    key: "focus",
    value: function focus() {
      var cbComponent = this.state.cbComponent;
      cbComponent.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      var cbComponent = this.state.cbComponent;
      cbComponent.blur();
    }
  }, {
    key: "clear",
    value: function clear() {
      var cbComponent = this.state.cbComponent;
      cbComponent.clear();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ComponentContext.Provider, {
        value: this.state
      }, /*#__PURE__*/React.createElement("div", {
        id: this.id,
        className: this.props.className || ''
      }, this.state.moduleLoaded && this.props.children || []));
    }
  }]);

  return ChargebeeComponents;
}(React.Component);

var _excluded = ["onBlur", "onChange", "onFocus", "onReady"];
var CardNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onReady = props.onReady,
      rest = _objectWithoutProperties(props, _excluded);

  var listeners = {
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onReady: onReady
  };
  return /*#__PURE__*/React.createElement(ComponentContext.Consumer, null, function (ctx) {
    return /*#__PURE__*/React.createElement(Element, _extends({
      type: "number",
      cbComponent: ctx.cbComponent,
      ref: ref,
      listeners: listeners
    }, rest));
  });
});

var _excluded$1 = ["onBlur", "onChange", "onFocus", "onReady"];
var CardExpiry = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onReady = props.onReady,
      rest = _objectWithoutProperties(props, _excluded$1);

  var listeners = {
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onReady: onReady
  };
  return /*#__PURE__*/React.createElement(ComponentContext.Consumer, null, function (ctx) {
    return /*#__PURE__*/React.createElement(Element, _extends({
      type: "expiry",
      cbComponent: ctx.cbComponent,
      ref: ref,
      listeners: listeners
    }, rest));
  });
});

var _excluded$2 = ["onBlur", "onChange", "onFocus", "onReady"];
var CardCVV = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onReady = props.onReady,
      rest = _objectWithoutProperties(props, _excluded$2);

  var listeners = {
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onReady: onReady
  };
  return /*#__PURE__*/React.createElement(ComponentContext.Consumer, null, function (ctx) {
    return /*#__PURE__*/React.createElement(Element, _extends({
      type: "cvv",
      cbComponent: ctx.cbComponent,
      ref: ref,
      listeners: listeners
    }, rest));
  });
});

var CardComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(ChargebeeComponents, _extends({
    type: "card"
  }, props, {
    ref: ref
  }));
});

var Provider = /*#__PURE__*/React.forwardRef(function (props, ref) {
  if (props.cbInstance && validateCbInstance(props.cbInstance)) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, props.children);
  } else {
    return null;
  }
});

export { CardCVV, CardComponent, CardExpiry, CardNumber, Provider };
