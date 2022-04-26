import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBriefcase, faTasks, faDownload, faCode, faFileCode, faMailBulk, faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faGithub, faGithubSquare, faGitlab, faTwitterSquare, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faBriefcase)
library.add(faDownload)
library.add(faCode)
library.add(faFileCode)
library.add(faMailBulk)
library.add(faPhoneAlt)
library.add(faTasks)
library.add(faLocationArrow)
library.add(faFacebookSquare)
library.add(faLinkedin)
library.add(faGitlab)
library.add(faGithub)
library.add(faGithubSquare)
library.add(faCodepen)
library.add(faTwitterSquare)

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

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
