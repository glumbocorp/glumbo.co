<script setup lang="ts">
import Coin3D from '@/components/Coin3D.vue'
import DoxxButton from '@/components/buttons/DoxxButton.vue'
</script>

<template>
  <main>
    <Coin3D style="position: fixed; z-index: 1; width: 100vw; height: 100vh; opacity: 0.05" />
    <div class="split-banner">
      <div>We know your address.</div>
      <div>Find out how:<DoxxButton /></div>
    </div>
    <div class="content">
      <h1>THE WORLD'S FIRST AND ONLY EDIBLE CRYPTO.</h1>
      <h3>
        <i
          >world's first choking hazard. small parts warning: your toddler will LOVE crypto exchange
          and swallowing coin!!</i
        >
      </h3>
      <h2>Easier than ever</h2>
      <p>
        We have made it easier than ever to choke on digital coins. No longer do you have to get
        physical coins to choke on them and die and go to the hostpital. We put the "innovation" in
        going to the hospital/dying
      </p>
      <h2>Hungry? Umm, not for long. Smile</h2>
      <p>
        We made food reimagined. Imagine a place where some innovative food. Sometimes tho you will
        choke and then you die LMAO. Jk this was all just a joke LMFAO. Umm but not the part about
        innovation teehee. We put the "innovation" in "meal innovation"
      </p>
      <h2>Actually tho</h2>
      <p>
        You never take me seriously and I hate my job and i am so sad and have no money and am broke
        and have no money and am bald. Buy our coins please it will give me my hair back
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
}

.split-banner {
  display: flex;
  height: 24rem;
}

.split-banner > div {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  color: var(--gt-c-gray);
  background-color: var(--gt-c-purple);
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-size: 4rem;
  line-height: 1.2;
  z-index: 2;
}

.split-banner > div::selection {
  background-color: var(--gt-c-yellow);
}

.split-banner > div:nth-child(2) {
  background-color: var(--gt-c-yellow);
  align-content: space-between;
}

.split-banner > div:nth-child(2)::selection {
  background-color: var(--gt-c-purple);
}

.content {
  position: relative;
  z-index: 2;
  margin: 1rem 2rem;
}

h3, p {
  font-family: "DM Sans", sans-serif;
}

h3 {
 opacity: 0.5;
 line-height: 1.2rem;
 padding-bottom: 1.2rem;
}

p {
  font-size: 1rem;
  padding-left: 1rem;
  padding-bottom: 0.8rem;
}
</style>
