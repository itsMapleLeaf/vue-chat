<template>
  <div class="container flex-vertical" v-md-theme="'default'">
    <chat-messages class="flex-grow" v-bind="{ messages }"></chat-messages>
    <chat-input class="flex-fixed" @submit="chatSubmit"></chat-input>
  </div>
</template>

<script>
import ChatMessages from './chat-messages.vue'
import ChatInput from './chat-input.vue'

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
  methods: {
    chatSubmit(text) {
      this.messages.push({ text, time: new Date().toLocaleTimeString(), })
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
</style>

<style scoped>
.container {
  height: 100vh;
}
</style>
