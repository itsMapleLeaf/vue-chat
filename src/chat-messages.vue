<template>
  <md-list class="chat-messages">
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
</template>

<script>
export default {
  name: 'chat-messages',
  props: {
    messages: Object,
  }
}
</script>

<style>
.chat-messages {
  overflow-y: auto;
}
</style>