import { AuthRequest } from 'api'
import { } from 'reducers/auth/select'
import * as ActionTypes from './constant'

export const register = (cb = () => null) => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGGED_INFO_REQUEST
  })

  AuthRequest.register({})
    .then(response => {
      dispatch({
        type: ActionTypes.LOGGED_INFO_SUCCESS,
        payload: {
          userId: response.data.user_id,
          token: response.data.key,
          // username: response.data.username,
        }
      })
      cb(null, response)
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.LOGGED_INFO_FAILURE,
        payload: {
          error: err.errors
        }
      })
    })
}