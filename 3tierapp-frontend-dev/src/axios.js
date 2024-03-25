import axios from "axios";
import { API } from "./config/constant";
// axios
//   .get("https://ae77-103-179-223-164.ngrok.io")
//   .then((res) => console.log(res, "Success"))
//   .catch((err) => console.log(err));
const instance = axios.create({
  baseURL: API,
});

instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// instance.defaults.headers.common['language'] = 'en';
if (localStorage.access_token) {
  const JWT_token = localStorage.access_token;
  // const JWT_token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY5NDU5MDY2NX0.74atDX5NTwTCHivWJDw1yi_u65XVSLNYTjnD9Efez6s";
  instance.defaults.headers.common["Authorization"] = JWT_token;
}

instance.interceptors.request.use(async (config) => {
  const JWT_token = localStorage.access_token;

  config.headers.common["access_token"] = JWT_token;
  return config;
});

instance.interceptors.request.use(null, (error) => {
  alert(error.status);
  if (error.status === 500) {
    window.location.href = "/";
  }
  return Promise.reject(error);
});

export default instance;
