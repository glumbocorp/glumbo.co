<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
const doxxLabel = ref<string>('Doxx Me')

function onClick(e: Event) {
  /*axios
    .get('https://ifconfig.me', {
      headers: {
        'Access-Control-Allow-Origin': true
      }
    })
    .then((data) => console.log)
    */
  doxxLabel.value = 'we lied lmao'
}
</script>

<template>
  <button @click="onClick">{{ doxxLabel }}</button>
</template>

<style scoped>
button {
  background-color: var(--gt-c-magenta);
  box-shadow: var(--gt-c-gray) 4px 4px;
  border-width: 0;
  border-radius: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 50%;
  width: 50%;
  cursor: pointer;
}
</style>
