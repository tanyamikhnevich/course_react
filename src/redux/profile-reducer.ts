import { profileAPI } from "../api/api";
import {stopSubmit} from "redux-form";
import {PostsType, ProfileType, PhotosType} from "../Types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


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

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p=> p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType,
      };
    }
    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST,
  newPostBody: string,
}

export const addPostActionCreator = (newPostBody: string): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostBody,
});

type DeletePostType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId,
});


type SetUserProfileType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType,
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});


type SetStatusType = {
  type: typeof SET_STATUS,
  status: string,
}
export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType,
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch: any) => {
  let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  debugger;
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
      return Promise.reject(response.data.messages[0])
    }
};

export default profileReducer;
