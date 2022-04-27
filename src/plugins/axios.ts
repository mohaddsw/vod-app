import axios from "axios";
import Vue from "vue";
const ax = axios.create({
  baseURL: `${process.env.VUE_APP_BASE}?api_key=0f8a978775ee7b8a5b78e34b10c8f1d6`,
});

export default {
  install: function (Vue: any) {
    Object.defineProperty(Vue.prototype, "$axios", { value: ax });
  },
};
