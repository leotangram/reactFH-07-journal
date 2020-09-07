import { types } from '../types/types'
import { firebase, googleAddProvider } from '../firebase/firebaseConfig'

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(loginAction(123, 'Pedro'))
    }, 3500)
  }
}

export const startGoogleLogin = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(googleAddProvider)
      .then(({ user }) => {
        dispatch(loginAction(user.uid, user.displayName))
      })
  }
}

export const loginAction = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})
