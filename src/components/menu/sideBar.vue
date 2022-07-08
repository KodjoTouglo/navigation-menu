<template>
  <div class="sidebar">
    <div class="toggle_btn" style="display: block" @click="toggle()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="logo_content">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <i></i>
    </div>
    <ul class="nav_list">
      <li>
        <router-link to="/">
          <i class="fa-solid fa-house"></i>
          <span class="links_name">Page d'Accueil</span>
        </router-link>
        <span class="tooltip">Page d'Accueil</span>
      </li>
      <li>
        <router-link to="/page_un">
          <i class="fa-solid fa-pen-to-square"></i>
          <span class="links_name">Page 1</span>
        </router-link>
        <span class="tooltip">Page 1</span>
      </li>
      <li>
        <router-link to="/tiroir">
          <i class="fa-solid fa-folder-minus"></i>
          <span class="links_name">Tiroir</span>
        </router-link>
        <span class="tooltip">Tiroir</span>
      </li>
    </ul>
  </div>
  <!-- <div class="home_content">
    <div class="text">Home Content</div>
  </div> -->
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "sidebar-menu",
  methods: {
    ...mapGetters("ui", ["menuToggled"]),
    ...mapActions("ui", ["toggleMenu"]),
    toggle() {
      this.$store.dispatch("ui/toggleMenu");
    },
  },
});
</script>

<style src="@/style/sidebar/sidebar.scss" lang="scss" scoped></style>
