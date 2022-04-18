// index.ts
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {},
};

export default new Vuex.Store<RootState>(store);
