import {
  getActionType
} from 'actions/utils'

export const prefix = 'action.auth'

export const LOGGED_INFO_REQUEST = getActionType(prefix)('LOGGED_INFO_REQUEST')
export const LOGGED_INFO_SUCCESS = getActionType(prefix)('LOGGED_INFO_SUCCESS')
export const LOGGED_INFO_FAILURE = getActionType(prefix)('LOGGED_INFO_FAILURE')
export const LOGGED_INFO_CLEAR_ERROR = getActionType(prefix)('LOGGED_INFO_CLEAR_ERROR')