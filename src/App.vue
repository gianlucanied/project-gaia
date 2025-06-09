<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: { Header }
}
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
  font-family: 'Andale Mono', monospace;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
