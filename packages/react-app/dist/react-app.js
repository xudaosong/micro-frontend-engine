(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = global || self, global.reactApp = factory(global.React, global.ReactDOM));
}(this, (function (React, ReactDOM) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function reactApp() {
    return ReactDOM.render(React.createElement("h1", null, "Hello, world React App!"), document.getElementById("root"));
  }

  return reactApp;

})));
