import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

//Vue.axios.defaults.baseURL = 'http://localhost:10010'
Vue.axios.defaults.baseURL = '/api/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
