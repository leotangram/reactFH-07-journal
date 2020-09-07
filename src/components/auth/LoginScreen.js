import React from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import { setErrorAction, removeErrorAction } from '../../actions/ui'

const LoginScreen = props => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues

  const handleLogin = e => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password))
    }
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Email is not valid'))
      return false
    } else if (password.length < 5) {
      dispatch(setErrorAction('Password shoul be at least 6 characters'))
      return false
    }
    dispatch(removeErrorAction())
    return true
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  )
}

LoginScreen.propTypes = {}

export default LoginScreen
