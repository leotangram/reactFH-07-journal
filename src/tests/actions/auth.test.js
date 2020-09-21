import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  loginAction,
  logoutAction,
  startLoginEmailPassword,
  startLogout
} from '../../actions/auth'
import { types } from '../../types/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)

describe('Auth actions', () => {
  beforeEach(() => {
    store = mockStore(initState)
  })

  test('should login & logout create him action', () => {
    const uid = 'ABC123'
    const displayName = 'Leonardo'

    const login = loginAction(uid, displayName)
    const logout = logoutAction()

    expect(login).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName
      }
    })

    expect(logout).toEqual({
      type: types.logout
    })
  })

  test('should set startLogout', async () => {
    await store.dispatch(startLogout())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.logout
    })
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning
    })
  })

  test('should startLoginEmailPassword', async () => {
    await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'))
    const actions = store.getActions()
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: '8XVOMSrJaBd5zWmEnCMTRUE9Vdj2',
        displayName: null
      }
    })
  })
})
