import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { loginAction } from '../../actions/auth'
import { act } from '@testing-library/react'
import { firebase } from '../../firebase/firebaseConfig'
import Swal from 'sweetalert2'
import AppRouter from '../../routers/AppRouter'

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}))

jest.mock('../../actions/auth', () => ({
  loginAction: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: { id: 'ABC' },
    notes: []
  }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

describe('<AppRouter /> testing', () => {
  test('should call login authenticated', async () => {
    let user
    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword('test@testing.com', '123456')
      user = userCred.user

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      )
    })

    expect(loginAction).toHaveBeenCalledWith(
      '8XVOMSrJaBd5zWmEnCMTRUE9Vdj2',
      null
    )
  })
})
