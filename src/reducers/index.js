import { combineReducers } from 'redux'

import common from './common'
import auth from './auth/store'
import loading from './loading/store'
import error from './error/store'

export default combineReducers({
  common,
  auth,
  loading,
  error,
})