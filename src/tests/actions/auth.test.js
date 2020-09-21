import React from 'react'
import { loginAction, logoutAction } from '../../actions/auth'
import { types } from '../../types/types'

describe('Auth actions', () => {
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
})
