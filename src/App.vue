<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      |<v-btn @click="start">start</v-btn>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      window.open(
        "http://localhost:8080/game/gal-1/#/",
        "newwindow",
        "height=540,width=960,center=yes"
        // "height=540,width=960,center=yes,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no"
      );
    },
  },
};
</script>

<style lang="scss">
html, body {
  overflow: hidden;
}

#nav {
  position: absolute;
  z-index: 10000;
}
</style>
