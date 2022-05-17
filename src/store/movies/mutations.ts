import { MutationTree } from "vuex";
import { MovieState } from "./types";
export enum mutationType {
  SET_TOP_MOVIES = " SET_TOP_MOVIES",
}

export const mutations: MutationTree<MovieState> = {
  [mutationType.SET_TOP_MOVIES](state, payload) {
    state.topMovies = payload;
  },
};
