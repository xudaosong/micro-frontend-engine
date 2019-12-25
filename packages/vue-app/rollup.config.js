import commonjs from "rollup-plugin-commonjs";
import VuePlugin from "rollup-plugin-vue";

module.exports = {
  input: "./src/vue-app.js",
  output: {
    file: "./dist/vue-app.js",
    format: "umd",
    name: "vueApp"
  },
  external: ["vue", "single-spa-vue"],
  plugins: [
    commonjs(),
    VuePlugin()
  ]
};
