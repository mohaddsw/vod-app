import { Module } from "vuex";
import { RootState } from "../types";
import { MovieState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
const state: MovieState = {
  topMovies: [],
};

export const Movie: Module<MovieState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
