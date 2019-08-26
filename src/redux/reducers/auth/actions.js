import { AUTH_LOGIN } from './actionTypes';

export const authLogin = (data) => ({
  type: AUTH_LOGIN,
  payload: data
});