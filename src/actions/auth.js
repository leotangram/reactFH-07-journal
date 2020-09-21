import Swal from 'sweetalert2'
import { types } from '../types/types'
import { firebase, googleAddProvider } from '../firebase/firebaseConfig'
import { startLoadingAction, finishLoadingAction } from './ui'
import { noteLogout } from './notes'

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(loginAction(user.uid, user.displayName))
      })
      .catch(error => Swal.fire('Error', error.message, 'error'))
  }
}

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    dispatch(startLoadingAction())
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => dispatch(loginAction(user.uid, user.displayName)))
      .catch(error => Swal.fire('Error', error.message, 'error'))
      .finally(() => dispatch(finishLoadingAction()))
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

export const startLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut()
    dispatch(logoutAction())
    dispatch(noteLogout())
  }
}

export const logoutAction = () => ({
  type: types.logout
})
