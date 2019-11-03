import { combineReducers } from 'redux';
import { actionPending, actionSuccess, actionFailure } from 'redux/actions/utils';
import { AUTH_LOGIN, AUTH_LOGOUT } from './actionTypes';


const INITIAL_STATE = {
  loggedInfo: {
    token: null,
    userInfo: {
      _id: null,
      email: null
    }
  },
  loginState: {
    email: null,
    password: null,
    isRemember: false,
    isLoading: false,
    errors: null
  }
};

const loggedInfo = (state = INITIAL_STATE.loggedInfo, { type, payload }) => {
  switch (type) {
    case actionSuccess(AUTH_LOGIN): {
      return {
        ...state,
        token: payload.token
      };
    }

    case AUTH_LOGOUT: {
      return INITIAL_STATE.loggedInfo;
    }

    default: return state;
  }
};

const loginState = (state = INITIAL_STATE.loginState, { type, payload }) => {
  switch (type) {
    case actionPending(AUTH_LOGIN): {
      return {
        ...state,
        isLoading: true
      };
    }

    case actionSuccess(AUTH_LOGIN): {
      return {
        ...state,
        email: payload.loginInfo.email,
        password: null,
        isLoading: false,
        errors: null
      };
    }

    case actionFailure(AUTH_LOGIN): {
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    }

    default: return state;
  }
};

export default combineReducers({
  loggedInfo,
  loginState,
});
