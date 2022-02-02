import axios from "./axiosClient";

export function Register(values) {
  return axios.post("/register", values);
}



export function Login(values) {
  return axios.post("/login", values);
}



export function Authme() {
  return axios.get("/authme")
}



