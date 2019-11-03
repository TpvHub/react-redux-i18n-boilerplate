import { getActionTypeByPrefix } from 'redux/actions/utils';

const formatType = getActionTypeByPrefix('action.auth');

export const AUTH_LOGIN = formatType('AUTH_LOGIN');
export const AUTH_REGISTER = formatType('AUTH_REGISTER');
export const AUTH_LOGOUT = formatType('AUTH_LOGOUT');