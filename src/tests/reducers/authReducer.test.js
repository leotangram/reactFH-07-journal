import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types'

describe('authReducer tests', () => {
  test('should set login', () => {
    const initState = {}
    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Leonardo'
      }
    }
    const state = authReducer(initState, action)
    expect(state).toEqual({
      uid: 'abc',
      name: 'Leonardo'
    })
  })

  test('should set logout', () => {
    const initState = {
      uid: 'abc',
      displayName: 'Leonardo'
    }
    const action = {
      type: types.logout
    }
    const state = authReducer(initState, action)
    expect(state).toEqual({})
  })

  test('should set default case', () => {
    const initState = {}
    const action = {
      type: 'asd'
    }
    const state = authReducer(initState, action)
    expect(state).toEqual(initState)
  })
})
