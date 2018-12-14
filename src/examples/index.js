import Vue from 'vue'
import App from './App.vue'
import oUI from '../packages/index.js'
Vue.use(oUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
