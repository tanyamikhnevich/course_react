import { ResultCodeEnum, ResultCodeForCaptcha } from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import { BaseThunkType, InferActionsTypes} from "./redux-store";
import { authAPI } from "../api/Auth-api";
import { securityAPI } from "../api/Security-api";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, // if null then captcha is not required
};

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
    case "GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
  ) =>
    ({
      type: "SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "GET_CAPTCHA_URL_SUCCESS",
      payload: { captchaUrl },
    } as const),
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let authData = await authAPI.getAuth();
  if (authData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = authData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ): ThunkType =>
  async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
      dispatch(getAuthUserData());
    } else {
      if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      let message =
        loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = (): ThunkType => async (dispatch, getState) => {
  let data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch, getState) => {
  let data = await authAPI.logout();
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
export type InitialStateType = typeof initialState;
