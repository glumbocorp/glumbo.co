<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" id="logo">
      <img src="/images/logo.png" alt="logo" />
    </RouterLink>
    <nav>
      <a href="https://discord.gg/6s7eZy3QPw"> Chats </a>
      <a href="https://soundcloud.com/glumbo-sound-team"> Sounds </a>
      <a href="https://www.youtube.com/@GlumboCorpTMKidsChoiceAwards"> Videos </a>
      <RouterLink to="/" class="navlink" id="chaos">Chaos </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  position: relative;
  z-index: 0;
  align-items: center;
  justify-content: center;
  background-color: var(--c-bg-1);
  box-shadow: var(--c-bg-1) 0px 0px 4px;
}

nav {
  flex: 1;
  display: flex;
}

nav a {
  text-decoration: none;
  color: white;
  font-family: GlacialIndifference, 'DM Sans', sans-serif;
  font-size: x-large;
  flex-grow: 1;
  text-align: center;
}

nav a:hover {
  color: var(--gt-c-yellow);
}

nav a:nth-child(4n + 1):hover {
  color: var(--gt-c-purple);
}

nav a:nth-child(4n + 2):hover {
  color: var(--gt-c-cyan);
}

nav a:nth-child(4n + 3):hover {
  color: var(--gt-c-magenta);
}

#logo {
  max-height: 48px;
}

#logo img {
  width: 48px;
  height: 48px;
}
</style>
