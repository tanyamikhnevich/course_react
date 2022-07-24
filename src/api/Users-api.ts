import {UserType} from "../Types/types";
import {instance, ResponseType} from "./api";

type GetUsersType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
}


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
    return instance
      .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
      .then(res => res.data);
  },
  delFollow(id = 1) {
    return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>;
  },
  postFollow(id = 1) {
    return instance.post(`follow/${id}`).then(res => res.data) as Promise<ResponseType>;
  },
};



