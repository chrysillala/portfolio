import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import VueGtag from "vue-gtag";
import '@/assets/css/tailwind.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "UA-168469791-1" }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
