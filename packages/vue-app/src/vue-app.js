import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "vue-app",
    render: h => h(App)
  }
});

export const bootstrap = [vueLifecycles.bootstrap];

export function mount(props) {
  createDomElement();
  return vueLifecycles.mount(props);
}

export const unmount = [vueLifecycles.unmount];

function createDomElement() {
  // Make sure there is a div for us to render into
  let el = document.getElementById("vue-app");

  if (!el) {
    el = document.createElement("div");
    el.id = "vue-app";
    document.body.appendChild(el);
  }
  return el;
}
