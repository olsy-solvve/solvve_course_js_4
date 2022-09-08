import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
});

export default class MyPetsList {
  async getPetsList() {
    const res = await api.get("/list");
    return res.data;
  }

  addToList(data) {
    return api.post("/list", data);
  }

  deleteFromList(data) {
    return api.delete(data);
  }
}
