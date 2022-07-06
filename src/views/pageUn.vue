<template>
  <div class="">
    <pageun-menu item="Page Un"></pageun-menu>
    <div class="container">
      <b-card-group deck>
        <b-card
          title="Page 1"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          align="center"
          style="min-width: 20rem; max-width: 20rem"
          class="m-3"
        >
        </b-card>
        <b-card
          title="Tiroir"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          align="center"
          style="min-width: 20rem; max-width: 20rem"
          class="m-3"
        >
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import navBar from "@/components/menu/navBar.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "pageUn",
  components: {
    "pageun-menu": navBar,
  },
});
</script>

<style src="@/style/views/global.scss" lang="scss"></style>
