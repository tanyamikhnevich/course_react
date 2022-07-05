import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "67e82038-c055-4851-9f5c-29b1bd3dbdc7",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  delFollow(id = 1) {
    return instance.delete(`follow/${id}`);
  },
  postFollow(id= 1) {
    return instance.post(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile(userId = 2) {
    return instance
      .get(`profile/` + userId)
      .then((response) => response.data);
  },
};

export const authAPI = {
  getAuth() {
    return instance
      .get(`auth/me`)
      .then((response) => response.data);
  },
};
