import axios from "axios";
const ax = axios.create({
  baseURL: `${process.env.VUE_APP_BASE}`,
});

export default ax;
