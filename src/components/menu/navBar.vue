<template>
  <div id="nav">
    <h2 class="title">{{ item }}</h2>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "navbar-menu",
  data() {
    return {
      title: "Accueil",
    };
  },
  props: {
    item: String,
  },
});
</script>

<style src="@/style/navbar/navbar.scss" lang="scss" scoped></style>
