import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueScrollTo)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
