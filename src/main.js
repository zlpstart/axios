import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// // 基础设置
// import axios from 'axios'
// axios.defaults.headers['Context-Type'] = 'application/json';

import http from './util/http'
Vue.prototype.axios = http;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
