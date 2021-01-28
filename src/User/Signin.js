import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { signin, authenticate, isAuthenticated } from '../Admin/auth'
import classes from './Signin.module.css'

const Signin = () => {
  const [values, setValues] = useState({
    email: 'email@email.com',
    password: 'other passowrd2',
    error: '',
    redirectToReferrer: false,
  })

  const { email, password, error, redirectToReferrer } = values
  const { user } = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false })
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          })
        })
      }
    })
  }

  const signUpForm = () => (
    <form className={classes.signinForm}>
      <div className={classes.emailField}>
        <label className={classes.inputDesc}>Email</label>
        <input
          className={classes.inputField}
          onChange={handleChange('email')}
          type="email"
          value={email}
        />
      </div>

      <div className={classes.passField}>
        <label className={classes.inputDesc}>Password</label>
        <input
          className={classes.inputField}
          onChange={handleChange('password')}
          type="password"
          value={password}
        />
      </div>
      <button className={classes.formButton} onClick={clickSubmit}>
        Submit
      </button>
    </form>
  )

  const showError = () => (
    <div className={classes.errorMsg} style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.email === 'email@email.com') {
        return <Redirect to="/" />
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />
    }
  }

  return (
    <Layout>
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </Layout>
  )
}

export default Signin
