import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'blue',
  accent: 'cyan'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
