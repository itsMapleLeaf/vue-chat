<template lang="pug">
md-list.chat-messages
  md-list-item(v-for="{ text, time } in messages")
    md-avatar.md-avatar-icon
      md-icon favorite
    .md-list-text-container
      span {{ text }}
      span {{ time }}
</template>

<script>
export default {
  name: 'ChatMessages',
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