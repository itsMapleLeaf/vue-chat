<template lang="pug">
.container.flex-vertical(v-md-theme="'default'")
  chat-message.flex-grow(v-bind="{ messages }")
  chat-input.flex-fixed(@submit="chatSubmit")
</template>

<script>
import ChatMessages from './ChatMessages.vue'
import ChatInput from './ChatInput.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    ChatMessages,
    ChatInput,
  },
  props: {
    messages: Object,
  },
  methods: {
    chatSubmit(text) {
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
