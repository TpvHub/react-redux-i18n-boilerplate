import { compose, path, flatten } from 'ramda'
import { getActionType, AuthTypes, VideoTypes } from 'actions'

export const getLoadingState = state => state.loading

export const createLoadingSelector = (actions) => compose(
  loadingState => flatten([actions]).some(action => path([action], loadingState)),
  getLoadingState
)

const transformAction = (prefix, actions) => flatten([actions]).map(action => getActionType(prefix)(action))

export const isLoadingRegisterInfo = createLoadingSelector(
  transformAction(AuthTypes.prefix, ['CHECK_EMAIL', 'LOGGED_INFO'])
)

export const isLoadingUserInfo = createLoadingSelector(
  transformAction(AuthTypes.prefix, ['CHECK_USERNAME', 'LOGGED_INFO'])
)

export const isLoadingChooseOften = createLoadingSelector(
  transformAction(AuthTypes.prefix, ['UPDATE_FREQUENCY'])
)

export const isAcceptingVideo = createLoadingSelector(
  transformAction(VideoTypes.prefix, ['ACCEPT_VIDEO'])
)

export const isRejectingVideo = createLoadingSelector(
  transformAction(VideoTypes.prefix, ['REJECT_VIDEO'])
)
