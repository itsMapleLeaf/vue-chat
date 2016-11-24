<template>
  <div class="container flex-vertical" v-md-theme="'default'">
    <md-list class="chat-messages flex-grow">
      <md-list-item v-for="{ text, time } in messages">
        <md-avatar class="md-avatar-icon">
          <md-icon>favorite</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <span>{{ text }}</span>
          <span>{{ time }}</span>
        </div>
      </md-list-item>
    </md-list>
    <form class="chat-input-form flex-fixed flex-row" @submit.stop.prevent="chatSubmit">
      <md-input-container class="chat-input-container flex-grow">
        <md-input class="chat-input" placeholder="Say something!" v-model="chatInput"></md-input>
      </md-input-container>
      <md-button class="chat-send md-primary" @click="chatSubmit">Send</md-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    messages: [],
    chatInput: ''
  }),
  methods: {
    chatSubmit() {
      if (this.chatInput.trim() !== '') {
        this.messages.push({
          text: this.chatInput,
          time: new Date().toLocaleTimeString(),
        })
      }
      this.chatInput = ''
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

.chat-messages {
  overflow-y: auto;
}

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
