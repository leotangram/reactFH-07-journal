import { types } from '../types/types'
import { firebase, googleAddProvider } from '../firebase/firebaseConfig'

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(loginAction(user.uid, user.displayName))
      })
      .catch(error => console.log(error))
  }
}

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => dispatch(loginAction(user.uid, user.displayName)))
      .catch(error => console.log(error))
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
