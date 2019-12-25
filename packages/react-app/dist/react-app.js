(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('single-spa-react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'single-spa-react'], factory) :
  (global = global || self, factory(global.reactApp = {}, global.React, global.ReactDOM, global.singleSpaReact));
}(this, (function (exports, React, ReactDOM, singleSpaReact) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  singleSpaReact = singleSpaReact && singleSpaReact.hasOwnProperty('default') ? singleSpaReact['default'] : singleSpaReact;

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

  var Root =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Root, _React$Component);

    function Root() {
      _classCallCheck(this, Root);

      return _possibleConstructorReturn(this, _getPrototypeOf(Root).apply(this, arguments));
    }

    _createClass(Root, [{
      key: "render",
      value: function render() {
        return React.createElement("div", {
          style: {
            marginTop: '100px'
          }
        }, "Hello world React App!");
      }
    }]);

    return Root;
  }(React.Component);

  var reactLifecycles = singleSpaReact({
    React: React,
    ReactDOM: ReactDOM,
    rootComponent: Root,
    domElementGetter: domElementGetter
  });
  function bootstrap(props) {
    return reactLifecycles.bootstrap(props);
  }
  function mount(props) {
    return reactLifecycles.mount(props);
  }
  function unmount(props) {
    return reactLifecycles.unmount(props);
  }

  function domElementGetter() {
    // Make sure there is a div for us to render into
    var el = document.getElementById('reactApp');

    if (!el) {
      el = document.createElement('div');
      el.id = 'reactApp';
      document.body.appendChild(el);
    }

    return el;
  }

  exports.bootstrap = bootstrap;
  exports.mount = mount;
  exports.unmount = unmount;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
