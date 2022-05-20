import { MutationTree } from "vuex";
import { MovieState } from "./types";
export enum mutationType {
  SET_TOP_MOVIES = " SET_TOP_MOVIES",
  SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE",
}

export const mutations: MutationTree<MovieState> = {
  [mutationType.SET_TOP_MOVIES](state, payload) {
    state.topMovies = payload;
  },
  [mutationType.SET_SELECTED_MOVIE](state, payload) {
    state.selectedMovie = payload;
  },
};
