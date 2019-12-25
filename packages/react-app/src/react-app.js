/*
 * @author: xudaosong
 * @date: 2019-12-25 14:15:57
 */
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.jsx";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById("reactApp");
  if (!el) {
    el = document.createElement("div");
    el.id = "reactApp";
    document.body.appendChild(el);
  }

  return el;
}
