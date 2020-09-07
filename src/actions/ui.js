import { types } from '../types/types'

export const setErrorAction = errorMessage => ({
  type: types.uiSetError,
  payload: errorMessage
})

export const removeErrorAction = () => ({
  type: types.uiRemoveError
})

export const startLoadingAction = () => ({
  type: types.uiStartLoading
})

export const finishLoadingAction = () => ({
  type: types.uiFinishLoading
})
