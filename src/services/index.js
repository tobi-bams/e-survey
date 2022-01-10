import axios from "axios";

const request = axios.create({
  //   baseURL: "http://localhost:5000",
  baseURL: "https://enigmatic-basin-04401.herokuapp.com/",
});

request.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };

    const token = getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const getToken = () => {
  let userData = window.localStorage.getItem("user-data");
  if (userData) {
    userData = JSON.parse(userData);

    return userData.token;
  }
};

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (401 === error.response.status) {
      window.localStorage.removeItem("user-data");
      return window.location.replace("/login");
    } else {
      return Promise.reject(error.response);
    }
  }
);

export default request;
