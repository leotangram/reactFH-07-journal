import { types } from '../types/types'

export const setErrorAction = errorMessage => ({
  type: types.uiSetError,
  payload: errorMessage
})

export const removeErrorAction = () => ({
  type: types.uiRemoveError
})
