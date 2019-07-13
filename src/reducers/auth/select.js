import { compose } from 'ramda'

export const getAuthState = state => state.auth

export const getLoggedInfo = compose(
  authState => authState.loggedInfo,
  getAuthState
)