import {instance, ResponseType, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

type GetAuthResponseType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseType = {
  userId: number;
};

type LogoutResponseType = {
  userId: number;
};

export const authAPI = {
  getAuth() {
    return instance
      .get<ResponseType<GetAuthResponseType>>(`auth/me`)
      .then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<ResponseType<LoginResponseType, ResultCodeEnum | ResultCodeForCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance
      .delete<ResponseType<LogoutResponseType>>(`auth/login`) //proverit
      .then((res) => res.data);
  },
};
