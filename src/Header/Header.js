import React from 'react'
import StyledLink from '../StyledComponents/StyledLink'
import classes from './Header.module.css'

const Header = () => (
  <div className={classes.header}>
    <StyledLink className={classes.logoLink} to="/">
      All Building London LTD
    </StyledLink>
    <div className={classes.linkDiv}>
      <div className={classes.dropdownLink}>Menu</div>
      <StyledLink className={classes.secondaryLink} to="/">
        Home
      </StyledLink>
      <StyledLink className={classes.secondaryLink} to="/about">
        About Us!
      </StyledLink>
      <StyledLink className={classes.secondaryLink}>Contact Us</StyledLink>
    </div>
  </div>
)

export default Header
