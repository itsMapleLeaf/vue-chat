<template>
  <div class="container flex-vertical" v-md-theme="'default'">
    <chat-messages class="flex-grow" v-bind="{ messages }"></chat-messages>
    <chat-input class="flex-fixed" @submit="chatSubmit"></chat-input>
  </div>
</template>

<script>
import ChatMessages from './chat-messages.vue'
import ChatInput from './chat-input.vue'
import store from './store'

export default {
  name: 'app',
  components: {
    ChatMessages,
    ChatInput,
  },
  data () {
    return { messages: store.data.messages }
  },
  methods: {
    async chatSubmit(text) {
      store.sendMessage(text)
    },
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
