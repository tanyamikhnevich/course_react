import {UserType} from "../Types/types";
import {instance, ResponseType} from "./api";

type GetUsersType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
}

type FollowUnfollowType = {
  userId: number
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  delFollow(id = 1) {
    return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>;
  },
  postFollow(id = 1) {
    return instance.post<ResponseType<FollowUnfollowType>>(`follow/${id}`);
  },
};



