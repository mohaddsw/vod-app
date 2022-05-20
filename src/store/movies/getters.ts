import { GetterTree } from "vuex";
import { RootState } from "../types";
import { MovieState } from "./types";

export const getters: GetterTree<MovieState, RootState> = {
  getTopMovies(state): any {
    return state.topMovies;
  },
  getSelectedMovie(state): any {
    return state.selectedMovie;
  },
};
