import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './index'

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() &&
      isAuthenticated().user.email === 'email@email.com' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default AdminRoute
