import ax from "axios";
function axiosConfig() {
  ax.create({
    baseURL: `${process.env.VUE_APP_BASE}?api_key=0f8a978775ee7b8a5b78e34b10c8f1d6`,
  });
}
export default function (ctx: any, inject: any) {
  const axios = axiosConfig();
  inject("axios", axios);
  ctx.$axios = axios;
}
