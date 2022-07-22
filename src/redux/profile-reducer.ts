import { ResultCodeEnum } from "../api/api";
import { FormAction, stopSubmit } from "redux-form";
import { PostsType, ProfileType, PhotosType } from "../Types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { profileAPI } from "../api/Profile-api";

let initialState = {
  posts: [
    { id: 1, massage: "Yo!", likesCount: 67 },
    { id: 2, massage: "My first post", likesCount: 34 },
    { id: 3, massage: "Wow!!", likesCount: 45 },
    { id: 4, massage: "Yo", likesCount: 38 },
    { id: 5, massage: "Hello", likesCount: 98 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      let newPost = {
        id: 6,
        massage: action.newPostBody,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case "SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostBody: string) =>
    ({
      type: "ADD_POST",
      newPostBody,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: "DELETE_POST",
      postId,
    } as const),

  setUserProfile: (profile: ProfileType) =>
    ({
      type: "SET_USER_PROFILE",
      profile,
    } as const),

  setStatus: (status: string) =>
    ({
      type: "SET_STATUS",
      status,
    } as const),

  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: "SAVE_PHOTO_SUCCESS",
      photos,
    } as const),
};

export const getUserProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  };

export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
  };

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.setStatus(status));
    }
  };

export const savePhoto =
  (file: File): ThunkType =>
  async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    debugger;
    if (response.data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.savePhotoSuccess(response.data.data.photos));
    }
  };

export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(getUserProfile(userId));
    } else {
      dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  };

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;
