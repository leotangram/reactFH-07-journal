import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setErrorAction, removeErrorAction } from '../../actions/ui'

const RegisterScreen = props => {
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: 'Leonardo',
    email: 'leo@gmail.com',
    password: '123456',
    confirmPassword: '123456'
  })

  const { name, email, password, confirmPassword } = formValues

  const handleRegister = e => {
    e.preventDefault()
    if (isFormValid()) {
      console.log('Formulario correcto')
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction('Name is required'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Email is not valid'))
      return false
    } else if (password !== confirmPassword || password.length < 5) {
      dispatch(
        setErrorAction(
          'Password shoul be at least 6 characters ant match each other'
        )
      )
      return false
    }
    dispatch(removeErrorAction())
    return true
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola mundo</div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          className="auth__input"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  )
}

RegisterScreen.propTypes = {}

export default RegisterScreen
