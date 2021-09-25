import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './plugins/disable-drag'
import router from './router'

Vue.config.productionTip = false

console.log(
  `%c Lzyor Studio %c gal engine v1 %c`,
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  'background:transparent'
)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
