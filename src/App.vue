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

<style lang="scss"></style>
