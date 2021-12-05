import http from "./http-common";

class ApiService {
  getAll(url) {
    return http.get(`${url}`);
  }
  getAllProject() {
    return http.get("/project");
  }
  get(id) {
    return http.get(`${id}`);
  }

  createAccount(data) {
    return http.post("/auth/register/", data);
  }

  authorization(data) {
    return http.post("/auth/login/", data);
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
