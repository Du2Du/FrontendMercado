import axios from "axios";

export const Backend = axios.create({
  baseURL: "localhost:3000",
});
