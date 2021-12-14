import { http } from "./http-common";

class ApiService {
  getAll(url) {
    return http.get(`${url}`);
  }
  get(id) {
    return http.get(`${id}`);
  }

  createAccount(data) {
    return http.post("auth/users/", data);
  }

  authorization(data) {
    return http.post("auth-token/token/login", data);
  }
  userInfo() {
    return http.get("auth/users/me/");
  }

  project_create(data) {
    return http.post("project-create/", data);
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
