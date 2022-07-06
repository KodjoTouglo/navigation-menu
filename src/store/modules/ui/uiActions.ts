import { ActionTree } from "vuex";
import { menuToggledState } from "./types";
import { RootState } from "@/store/types";

export const actions: ActionTree<menuToggledState, RootState> = {
  toggleMenu(context) {
    context.commit("TOGGLE_MENU");
  },
};
