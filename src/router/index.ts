import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import pageAccueil from "../views/pageAccueil.vue";
import pageUn from "../views/pageUn.vue";
import tiroirView from "../views/tiroirView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: pageAccueil,
  },
  {
    path: "/page_un",
    name: "page_un",
    component: pageUn,
  },
  {
    path: "/tiroir",
    name: "tiroir",
    component: tiroirView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
