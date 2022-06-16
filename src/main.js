const { createApp } = require('vue')
import App from './App.vue'
import createRouter from './routes/'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

const app = createApp(App)

library.add(faUserSecret)
app.use(createRouter())
app.use(BootstrapVue3)
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
