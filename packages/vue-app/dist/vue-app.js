(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('single-spa-vue'), require('c:leedarsoncodemicro-frontend-engine
ode_modulesollup-plugin-vueuntime
ormalize.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'single-spa-vue', 'c:leedarsoncodemicro-frontend-engine
ode_modulesollup-plugin-vueuntime
ormalize.js'], factory) :
  (global = global || self, factory(global.vueApp = {}, global.Vue, global.singleSpaVue, global.__vue_normalize__));
}(this, (function (exports, Vue, singleSpaVue, __vue_normalize__) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  singleSpaVue = singleSpaVue && singleSpaVue.hasOwnProperty('default') ? singleSpaVue['default'] : singleSpaVue;
  __vue_normalize__ = __vue_normalize__ && __vue_normalize__.hasOwnProperty('default') ? __vue_normalize__['default'] : __vue_normalize__;

  //
  //
  //
  //
  //
  //

  var script = {
    name: 'vue-app'
  };

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { attrs: { id: "app-vue" } }, [
      _vm._v("\n  Hello world vue app!\n")
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  Vue.config.productionTip = false;

  const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
      el: "vue-app",
      render: h => h(__vue_component__)
    }
  });

  const bootstrap = [vueLifecycles.bootstrap];

  function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
  }

  const unmount = [vueLifecycles.unmount];

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

  exports.bootstrap = bootstrap;
  exports.mount = mount;
  exports.unmount = unmount;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
