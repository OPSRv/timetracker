import http from "./http-common";

class ApiService {
  createAccount(data) {
    return http.post("/auth/register/", data);
  }

  authorization(data) {
    return http.post("/auth/login/", data);
  }

  getAll() {
    return http.get("/api/contacts");
  }

  get(id) {
    return http.get(`/api/contacts/${id}`);
  }

  create(data) {
    return http.post("/api/contacts", data);
  }

  update(id, data) {
    return http.put(`/api/contacts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/contacts/${id}`);
  }

  deleteAll() {
    return http.delete(`/api/contacts`);
  }

  findByTitle(title) {
    return http.get(`/api/contacts?title=${title}`);
  }
}

export default new ApiService();