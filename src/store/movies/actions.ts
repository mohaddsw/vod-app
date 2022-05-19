import { ActionTree } from "vuex";
import { RootState } from "../types";
import { MovieState } from "./types";
import api from "@/apis/movieApi";
import axios from "axios";
import { mutationType } from "./mutations";

export const actions: ActionTree<MovieState, RootState> = {
  getTopMovies({ commit }): void {
    axios
      .get(api.getTopMovie())
      .then((res: any) => {
        const data = {
          data: res.data.items,
          type: true,
        };
        commit(mutationType.SET_TOP_MOVIES, data);
      })
      .catch((err: any) => {
        const data = {
          data: err,
          type: false,
        };
        commit(mutationType.SET_TOP_MOVIES, data);
      });
  },
};
