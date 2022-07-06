import { MutationTree } from "vuex";
import { menuToggledState } from "./types";

export const mutations: MutationTree<menuToggledState> = {
  TOGGLE_MENU(state) {
    const sidebar = document.querySelector(".sidebar");
    const titleWidth = document.querySelector(".title");
    if (state.menuToggled === true) {
      state.menuToggled = false;
      sidebar?.classList.toggle("active");
      titleWidth?.classList.toggle("active");
    } else {
      state.menuToggled = true;
      sidebar?.classList.toggle("active");
      titleWidth?.classList.toggle("active");
    }
  },
};
