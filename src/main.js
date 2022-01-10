import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBriefcase, faTasks, faDownload, faCode, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faBriefcase)
library.add(faDownload)
library.add(faCode)
library.add(faFileCode)
library.add(faTasks)
library.add(faFacebookSquare)
library.add(faLinkedin)
library.add(faGithubSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
