<template>
  <div class="container flex-vertical" v-md-theme="'default'">
    <chat-messages class="flex-grow" v-bind="{ messages }"></chat-messages>
    <chat-input class="flex-fixed" @submit="chatSubmit"></chat-input>
  </div>
</template>

<script>
import ChatMessages from './chat-messages.vue'
import ChatInput from './chat-input.vue'
import * as firebase from 'firebase'

export default {
  name: 'app',
  components: {
    ChatMessages,
    ChatInput,
  },
  data: () => ({
    messages: {},
    chatInput: ''
  }),
  mounted() {
    const ref = firebase.database().ref('messages').limitToLast(10)
    ref.on('child_added', this.addMessage)
    ref.on('child_removed', this.deleteMessage)
  },
  destroyed() {
    const ref = firebase.database().ref('messages')
    ref.off('child_added', this.addMessage)
    ref.off('child_removed', this.deleteMessage)
  },
  methods: {
    async chatSubmit(text) {
      const time = new Date().toLocaleTimeString()
      const message = { text, time }

      const db = firebase.database()
      const ref = await db.ref('messages').push()
      await ref.set(message)
    },
    addMessage(data) {
      this.$set(this.messages, data.key, data.val())
    },
    deleteMessage(data) {
      this.$delete(this.messages, data.key)
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
