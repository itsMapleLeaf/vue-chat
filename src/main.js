import 'regenerator-runtime/runtime'

import Vue from 'vue'
import VueMaterial from 'vue-material'
import store from './store'

import 'vue-material/dist/vue-material.css'
import './global.css'

Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'blue',
  accent: 'cyan'
})

store.init()