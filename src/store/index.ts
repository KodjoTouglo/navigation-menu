import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { ui } from "./modules/ui/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    ui,
  },
  devtools: false,
};

export default new Vuex.Store<RootState>(store);
