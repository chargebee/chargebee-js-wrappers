import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

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

var ComponentDefaultContext = {
  cbComponent: null
};
var ComponentContext = React.createContext(ComponentDefaultContext);

var ChargebeeComponents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChargebeeComponents, _React$Component);

  function ChargebeeComponents(props) {
    var _this;

    _classCallCheck(this, ChargebeeComponents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChargebeeComponents).call(this, props));
    _this.state = {
      moduleLoaded: false,
      cbComponent: null,
      cbInstance: null
    };
    return _this;
  }

  _createClass(ChargebeeComponents, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var _this$props = this.props,
          fonts = _this$props.fonts,
          classes = _this$props.classes,
          icon = _this$props.icon,
          style = _this$props.styles,
          locale = _this$props.locale,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onReady = _this$props.onReady;
      var options = {
        fonts: fonts,
        classes: classes,
        locale: locale,
        style: style,
        placeholder: placeholder,
        icon: icon
      };
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.cbComponent && this.state.moduleLoaded && this.state.cbComponent.status == 0) {
        this.state.cbComponent.at('card-field');
        this.state.cbComponent.mount();
      }
    }
  }, {
    key: "tokenize",
    value: function tokenize() {
      var _this$state = this.state,
          cbComponent = _this$state.cbComponent,
          cbInstance = _this$state.cbInstance;
      return cbInstance.tokenize(cbComponent);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ComponentContext.Provider, {
        value: this.state
      }, React.createElement("div", {
        id: "".concat(this.props.type, "-field"),
        className: this.props.className || ''
      }, this.state.moduleLoaded && this.props.children || []));
    }
  }]);

  return ChargebeeComponents;
}(React.Component);

var Element =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Element, _React$Component);

  function Element(props) {
    var _this;

    _classCallCheck(this, Element);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, props));
    _this.field = null;
    _this.ElementRef = React.createRef();
    return _this;
  }

  _createClass(Element, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          cbComponent = _this$props.cbComponent,
          id = _this$props.id,
          styles = _this$props.styles,
          listeners = _this$props.listeners,
          placeholder = _this$props.placeholder;
      this.field = cbComponent.createField(id, {
        placeholder: placeholder,
        style: styles
      }).at("card-".concat(id)); // Attaching listeners if any

      if (listeners) {
        if (listeners.onBlur) this.field.on('blur', listeners.onBlur);
        if (listeners.onFocus) this.field.on('focus', listeners.onFocus);
        if (listeners.onReady) this.field.on('ready', listeners.onReady);
        if (listeners.onChange) this.field.on('change', listeners.onChange);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.field.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className;
      return React.createElement("div", {
        id: "card-".concat(id),
        ref: this.ElementRef,
        className: className
      }, this.props.children);
    }
  }]);

  return Element;
}(React.Component); // Pass Context as props


var _Element =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(_Element, _React$Component2);

  function _Element() {
    _classCallCheck(this, _Element);

    return _possibleConstructorReturn(this, _getPrototypeOf(_Element).apply(this, arguments));
  }

  _createClass(_Element, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(ComponentContext.Consumer, null, function (ctx) {
        return React.createElement(Element, _extends({
          cbComponent: ctx.cbComponent
        }, _this2.props));
      });
    }
  }]);

  return _Element;
}(React.Component);

var CardNumber =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardNumber, _React$Component);

  function CardNumber() {
    _classCallCheck(this, CardNumber);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardNumber).apply(this, arguments));
  }

  _createClass(CardNumber, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onReady = _this$props.onReady,
          props = _objectWithoutProperties(_this$props, ["onBlur", "onChange", "onFocus", "onReady"]);

      var listeners = {
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onReady: onReady
      };
      return React.createElement(Fragment, null, React.createElement(_Element, _extends({
        id: "number"
      }, props, {
        listeners: listeners
      })));
    }
  }]);

  return CardNumber;
}(React.Component);

var CardExpiry =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardExpiry, _React$Component);

  function CardExpiry() {
    _classCallCheck(this, CardExpiry);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardExpiry).apply(this, arguments));
  }

  _createClass(CardExpiry, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onReady = _this$props.onReady,
          props = _objectWithoutProperties(_this$props, ["onBlur", "onChange", "onFocus", "onReady"]);

      var listeners = {
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onReady: onReady
      };
      return React.createElement(Fragment, null, React.createElement(_Element, _extends({
        id: "expiry"
      }, props, {
        listeners: listeners
      })));
    }
  }]);

  return CardExpiry;
}(React.Component);

var CardCVV =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardCVV, _React$Component);

  function CardCVV() {
    _classCallCheck(this, CardCVV);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardCVV).apply(this, arguments));
  }

  _createClass(CardCVV, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onReady = _this$props.onReady,
          props = _objectWithoutProperties(_this$props, ["onBlur", "onChange", "onFocus", "onReady"]);

      var listeners = {
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onReady: onReady
      };
      return React.createElement(Fragment, null, React.createElement(_Element, _extends({
        id: "cvv"
      }, props, {
        listeners: listeners
      })));
    }
  }]);

  return CardCVV;
}(React.Component);

var CardComponent = React.forwardRef(function (props, ref) {
  return React.createElement(ChargebeeComponents, _extends({
    type: "card"
  }, props, {
    ref: ref
  }));
});

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log('cardComponent', CardComponent);
      return React.createElement("div", null, React.createElement("h1", null, "hello"));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
