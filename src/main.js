import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  el:'#app',
  render: h => h(App),
  
  store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
})
