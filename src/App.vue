<template>
  <div id="app">
    <navbar-menu></navbar-menu>
    <sidebar-menu></sidebar-menu>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import navBar from "@/components/menu/navBar.vue";
import sideBar from "@/components/menu/sideBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    "navbar-menu": navBar,
    "sidebar-menu": sideBar,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
