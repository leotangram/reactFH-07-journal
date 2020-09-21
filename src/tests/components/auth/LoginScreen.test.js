import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import {
  startGoogleLogin,
  startLoginEmailPassword
} from '../../../actions/auth'
import LoginScreen from '../../../components/auth/LoginScreen'

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
)

describe('<LoginScreen /> Testing', () => {
  beforeEach(() => {
    store = mockStore(initState)
    jest.clearAllMocks()
  })

  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should dispatch startGoogleLogin action', () => {
    wrapper.find('.google-btn').prop('onClick')()
    expect(startGoogleLogin).toHaveBeenCalled()
  })

  test('should dispatch startLoginEmailPassword with arguments', () => {
    wrapper.find('form').prop('onSubmit')({ preventDefault() {} })
    expect(startLoginEmailPassword).toHaveBeenCalledWith(
      'email@email.com',
      '123456'
    )
  })
})
