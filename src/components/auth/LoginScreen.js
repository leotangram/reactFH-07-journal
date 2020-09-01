import React from 'react'
import PropTypes from 'prop-types'

const LoginScreen = props => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
        <hr />
        google
      </form>
    </>
  )
}

LoginScreen.propTypes = {}

export default LoginScreen
