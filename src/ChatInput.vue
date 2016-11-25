<template lang="pug">
form.chat-input-form.flex-row(@submit.stop.prevent="chatSubmit")
  md-input-container.chat-input-container.flex-grow
    md-input.chat-input(placeholder="Say something!", v-model="chatInput")
  md-button.md-primary.chat-send(@click="chatSubmit") Send
</template>

<script>
export default {
  name: 'ChatInput',
  data: () => ({
    chatInput: ''
  }),
  methods: {
    chatSubmit() {
      const text = this.chatInput.trim()
      if (text !== '') {
        this.$emit('submit', text)
      }
      this.chatInput = ''
    }
  }
}
</script>

<style scoped>
.chat-input-form {
  padding: 0 1em;
  background: white;
}

.chat-input-container {
  margin: 0.2em 0;
  padding: 0;
}

.chat-input {
  height: 3em;
}

.chat-send {
  /* height: 3em; */
}
</style>