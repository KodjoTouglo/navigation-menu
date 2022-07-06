import { Module } from "vuex";
import { menuToggledState } from "./types";
import { RootState } from "@/store/types";
import { actions } from "./uiActions";
import { getters } from "./uiGetters";
import { mutations } from "./uiMutations";

export const state: menuToggledState = {
  menuToggled: false,
};

export const ui: Module<menuToggledState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
