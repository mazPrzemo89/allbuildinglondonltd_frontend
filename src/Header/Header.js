import React from 'react'
import StyledLink from '../StyledComponents/StyledLink'
import classes from './Header.module.css'
import { signout, isAuthenticated } from '../Admin/auth'

const Header = () => (
  <div className={classes.header}>
    <StyledLink className={classes.logoLink} to="/">
      All Building London LTD
    </StyledLink>
    <div className={classes.linkDiv}>
      <div className={classes.dropdown}>
        <span className={classes.dropdownLink}>Menu</span>
        <div className={classes['dropdown-content']}>
          <StyledLink
            className={classes.menuLink}
            // style={{ paddingTop: '10px' }}
            to="./construction"
          >
            Construction work
          </StyledLink>
          <StyledLink className={classes.menuLink} to="./steelwork">
            Steelwork
          </StyledLink>
          <StyledLink className={classes.menuLink} to="./scaffolding">
            Scaffolding Service
          </StyledLink>
        </div>
      </div>
      <StyledLink className={classes.secondaryLink} to="/">
        Home
      </StyledLink>
      <StyledLink className={classes.secondaryLink} to="/gallery">
        Gallery
      </StyledLink>
      <StyledLink className={classes.secondaryLink} to="/about">
        About Us
      </StyledLink>
      <StyledLink className={classes.secondaryLink} to="/comments">
        Comments
      </StyledLink>
      <StyledLink className={classes.secondaryLink} to="/getquote">
        Contact Us
      </StyledLink>
      {isAuthenticated() && isAuthenticated().user.email === 'email@email.com' && (
        <StyledLink className={classes.secondaryLink} to="/admin">
          Admin
        </StyledLink>
      )}
      {isAuthenticated() && isAuthenticated().user.email === 'email@email.com' && (
        <button
          className={classes.logout}
          onClick={() => signout(() => window.location.reload())}
        >
          Logout
        </button>
      )}
    </div>
  </div>
)

export default Header
