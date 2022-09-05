import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
});

export default class MyPetsList {
  getPetsList() {
    return api.get("/list").then((res) => res.data);
  }

  addToList(data) {
    return api.post("/list", data);
  }

  deleteFromList(data) {
    return api.delete("/list", data);
  }
}
