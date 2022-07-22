import { updateObjectInArray } from "../utils/object-helpers";
import { UserType } from "../Types/types";
import { BaseThunkType, InferActionsTypes} from "./redux-store";
import { Dispatch } from "redux";
import {usersAPI} from "../api/Users-api";
import {ResultCodeEnum} from "../api/api";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users Id
};

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case 'SET_USERS': {
      return { ...state, users: action.users };
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const actions = {
  followSuccess: (userId: number) => ({
    type: 'FOLLOW',
    userId,
  } as const),

  unfollowSuccess: (userId: number) => ({
    type: 'UNFOLLOW',
    userId,
  } as const),

  setUsers: (users: Array<UserType>) => ({
    type: 'SET_USERS',
    users,
  } as const),

  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage,
  } as const),

  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount,
  } as const),

  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching,
  } as const),

  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
  } as const),
};

export const getUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode == ResultCodeEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.postFollow.bind(usersAPI),
        actions.followSuccess
    );
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.delFollow.bind(usersAPI),
        actions.unfollowSuccess
    );
  };
};

export default usersReducer;

type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes>;
type ActionsTypes = InferActionsTypes<typeof actions>
