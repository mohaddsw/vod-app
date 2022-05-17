import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { Movie } from "./movies";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    test: "this is a test sentence",
    version: "20",
  },
  modules: {
    Movie,
  },
};
export default new Vuex.Store<RootState>(store);
