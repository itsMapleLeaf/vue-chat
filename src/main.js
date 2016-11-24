require('regenerator-runtime/runtime')

import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './app.vue'
import * as firebase from 'firebase'

import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'blue',
  accent: 'cyan'
})


firebase.initializeApp({
  apiKey: "AIzaSyCSJF99jCNQQTUOi2EXd9XU_ZgGGYP6U7Y",
  authDomain: "rpchat-59074.firebaseapp.com",
  databaseURL: "https://rpchat-59074.firebaseio.com",
  storageBucket: "rpchat-59074.appspot.com",
  messagingSenderId: "192547961510"
})

firebase.auth().signInAnonymously()

new Vue({
  el: '#app',
  render: h => h(App)
})
