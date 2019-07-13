import { compose, path, flatten, head } from 'ramda'
import { getActionType, AuthTypes } from 'actions'

export const getErrorState = state => state.error

export const createErrorMessageSelector = (actions) => compose(
  listErrors => head(listErrors) || [],
  errorState =>
    flatten(actions)
      .map(action => path([action], errorState))
      .filter(item => !!item),
  getErrorState
)

const transformAction = (prefix, actions) => flatten([actions]).map(action => getActionType(prefix)(action))

export const errorRegisterInfo = createErrorMessageSelector(
  transformAction(AuthTypes.prefix, 'CHECK_EMAIL')
)
