import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { menuToggledState } from "./types";

export const getters: GetterTree<menuToggledState, RootState> = {
  menuToggled: (state) => {
    return state.menuToggled;
  },
};
