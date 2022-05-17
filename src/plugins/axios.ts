import axios, { AxiosInstance } from "axios";
const ax = axios.create({
  baseURL: `${process.env.VUE_APP_BASE}`,
});

export default function (ctx: any, inject: any) {
  inject("axios", ax);
  ctx.$axios = ax;
}
