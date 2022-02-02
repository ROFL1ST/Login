import axios from "axios";



const axiosClient = axios.create({
  baseURL: "http://localhost:9000"
});

export const syncToken = () => {
  axiosClient.defaults.headers[
    "X-Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
};
export default axiosClient;
