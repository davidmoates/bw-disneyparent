import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://disney-parent-bw-2.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};

export default axiosWithAuth;
