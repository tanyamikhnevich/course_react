import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "67e82038-c055-4851-9f5c-29b1bd3dbdc7",
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};