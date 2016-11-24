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
    messages: [],
    chatInput: ''
  }),
  mounted() {
    firebase.database()
      .ref('messages')
      .limitToLast(10)
      .on('child_added', this.updateMessages)
  },
  destroyed() {
    firebase.database().ref('messages').off('child_added', this.updateMessages)
  },
  methods: {
    async chatSubmit(text) {
      const time = new Date().toLocaleTimeString()
      const message = { text, time }

      const db = firebase.database()
      const ref = await db.ref('messages').push()
      await ref.set(message)
    },
    updateMessages(data) {
      this.messages.push(data.val())
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.flex-row {
  display: flex;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
  min-height: 0;
}

.flex-fixed {
  flex-shrink: 0;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ddd;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border: 1px solid #999;
}
</style>

<style scoped>
.container {
  height: 100vh;
}
</style>
