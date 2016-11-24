import * as firebase from 'firebase'
import Vue from 'vue'
import App from './app.vue'

export default {
  data: {
    messages: {}
  },

  async init() {
    try {
      this.initVue()
      await this.signIn()

      const ref = firebase.database().ref('messages')
      ref.on('child_added', this.messageAdded.bind(this))
      ref.on('child_removed', this.messageDeleted.bind(this))
    }
    catch (error) {
      console.error('error in initialization: ', error)
    }
  },

  async signIn() {
    firebase.initializeApp({
      apiKey: "AIzaSyCSJF99jCNQQTUOi2EXd9XU_ZgGGYP6U7Y",
      authDomain: "rpchat-59074.firebaseapp.com",
      databaseURL: "https://rpchat-59074.firebaseio.com",
      storageBucket: "rpchat-59074.appspot.com",
      messagingSenderId: "192547961510"
    })
    await firebase.auth().signInAnonymously()
  },

  initVue() {
    new Vue({
      el: '#app',
      render: h => h(App, { props: this.data }),
      data: this.data
    })
  },

  messageAdded(data) {
    Vue.set(this.data.messages, data.key, data.val())
  },

  messageDeleted(data) {
    Vue.delete(this.data.messages, data.key)
  },

  async sendMessage(text) {
    const time = new Date().toLocaleTimeString()
    const message = { text, time }
    await firebase.database().ref('messages').push(message)
  }
}