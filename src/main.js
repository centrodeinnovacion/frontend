import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueClipboard from 'vue-clipboard2'
import {sync} from 'vuex-router-sync'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
sync(store, router)
//Vue.axios.defaults.baseURL = 'http://localhost:10010'
Vue.axios.defaults.baseURL = '/api/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
