import { combineReducers } from 'redux'
import { AuthTypes } from 'actions'

const INITIAL_STATE = {
  loggedInfo: {
    token: null,
    username: null,
    userId: null
  }
}

const loggedInfo = (state = INITIAL_STATE.loggedInfo, { type, payload }) => {
  switch (type) {
    case AuthTypes.LOGGED_INFO_SUCCESS:
      return payload

    default:
      return state
  }
}

export default combineReducers({
  loggedInfo,
})