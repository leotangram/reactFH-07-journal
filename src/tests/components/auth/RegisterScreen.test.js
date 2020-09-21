import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import RegisterScreen from '../../../components/auth/RegisterScreen'
import { types } from '../../../types/types'

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

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
)

describe('<RegisterScreen /> testing', () => {
  beforeEach(() => {
    store = mockStore(initState)
    jest.clearAllMocks()
  })

  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should diaptch action', () => {
    const emailField = wrapper.find('input[name="email"]')
    emailField.simulate('change', {
      target: {
        value: '',
        name: 'email'
      }
    })
    wrapper.find('form').prop('onSubmit')({ preventDefault() {} })
    const actions = store.getActions()
    // expect(actions[0]).toEqual({
    //   type: types.uiSetError,
    //   payload: 'Email is not valid'
    // })
  })
})
