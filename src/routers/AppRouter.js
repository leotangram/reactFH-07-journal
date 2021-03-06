import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebaseConfig'
import { loginAction } from '../actions/auth'
import { startLoadingNotes } from '../actions/notes'
import AuthRouter from './AuthRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import JournalScreen from '../components/journal/JournalScreen'

const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(loginAction(user.uid, user.displayName))
        setIsLoggedIn(true)
        dispatch(startLoadingNotes(user.uid))
      } else {
        setIsLoggedIn(false)
      }
    })

    setChecking(false)
  }, [dispatch])

  if (checking) {
    return <h1>Wait...</h1>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            exact
            path="/"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
