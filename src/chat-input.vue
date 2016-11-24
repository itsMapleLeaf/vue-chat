<template>
  <form class="chat-input-form flex-row" @submit.stop.prevent="chatSubmit">
    <md-input-container class="chat-input-container flex-grow">
      <md-input class="chat-input" placeholder="Say something!" v-model="chatInput"></md-input>
    </md-input-container>
    <md-button class="chat-send md-primary" @click="chatSubmit">Send</md-button>
  </form>
</template>

<script>
export default {
  name: 'chat-input',
  data: () => ({
    chatInput: ''
  }),
  methods: {
    chatSubmit() {
      if (this.chatInput.trim() !== '') {
        this.$emit('submit', this.chatInput)
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