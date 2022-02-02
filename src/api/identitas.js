import axios from "./axiosClient";
import { syncToken } from "./axiosClient";

export function Identitas(values) {
  syncToken();
  return axios.post("/identitas", values);
}

export function Delete(values) {
  return axios.delete("/identitas/delete", values);
}

export function Update(values) {
  return axios.put("/identitas", values);
}

export function GetUser() {
  return axios.get("/users");
}
