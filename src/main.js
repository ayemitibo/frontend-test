import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Loader from "./components/Loader.vue";
Vue.component("Loader", Loader);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
