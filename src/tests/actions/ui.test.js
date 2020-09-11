import {
  setErrorAction,
  removeErrorAction,
  startLoadingAction,
  finishLoadingAction
} from '../../actions/ui'
import { types } from '../../types/types'

describe('ui actions test', () => {
  test('should found all actions', () => {
    const action = setErrorAction('HELP!!!')
    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'HELP!!!'
    })

    const removeError = removeErrorAction()
    const startLoading = startLoadingAction()
    const finishLoading = finishLoadingAction()

    expect(removeError).toEqual({
      type: types.uiRemoveError
    })
    expect(startLoading).toEqual({
      type: types.uiStartLoading
    })
    expect(finishLoading).toEqual({
      type: types.uiFinishLoading
    })
  })
})
