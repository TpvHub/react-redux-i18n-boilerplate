import { AUTH_LOGIN, AUTH_LOGOUT } from './actionTypes';
import { requestAction } from 'redux/actions/utils';

// normalize
import { authLoginNormalizePayload, authLoginNormalizeError } from './normalize';

const demoApiLogin = (loginInfo) => new Promise((rs, rj) => {
  setTimeout(() => {
    if (loginInfo.email === 'abc') rs({ token: 'token' });
    else rj(new Error('Email not correct'));
  }, 2000);
});

export const authLogin = (loginInfo) => {
  return requestAction(
    AUTH_LOGIN,
    demoApiLogin,
    res => ({
      ...authLoginNormalizePayload(res),
      loginInfo
    }),
    authLoginNormalizeError
  )(loginInfo);
};

export const authLogout = () => dispatch => {
  dispatch({
    type: AUTH_LOGOUT
  });
};