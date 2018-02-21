import Vue from 'vue';
import axios from 'axios';
import VueFire from 'vuefire';

import App from './App';
import router from './router';
import store from './store';

import './firebase';

Vue.use(VueFire);

try {
  window.$ = window.jQuery = require('jquery');
  window.Hammer = require('hammerjs');
  require('materialize-css');
} catch (e) {
  /* eslint-disable no-console */
  console.log(e);
}

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
