import React from 'react'
import { withRouter } from 'react-router-dom'
import StyledLink from '../StyledComponents/StyledLink'
import Layout from '../Layout/Layout'

const Menu = () => (
  <Layout>
    <div>
      <StyledLink to="/">AllBuildingLondonltd</StyledLink>
    </div>
    <div>
      <StyledLink to="/signin">Signin</StyledLink>
    </div>
    <div>
      <StyledLink to="/signup">Signup</StyledLink>
    </div>
  </Layout>
)

export default withRouter(Menu)
