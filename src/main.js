// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';

const axios = Axios.create();
axios.defaults.baseURL = 'https://akela.mendelu.cz/~xboris/backend/public/';

//register axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

import 'bootstrap/dist/css/bootstrap.css';