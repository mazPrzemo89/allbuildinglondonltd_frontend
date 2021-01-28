import React from 'react'
import { Link } from 'react-router-dom'
import { signout, isAuthenticated } from '../../Admin/auth/'
import classes from './Header.module.css'

const Menu = () => {
  return (
    <div className={classes.menuLinks}>
      <Link className={classes.blueLink} to="/">
        <button className={classes.menuBtn}>Home</button>
      </Link>
      <Link className={classes.blueLink} to="./construction">
        <button className={classes.menuBtn}>Construction</button>
      </Link>
      <Link className={classes.blueLink} to="./steelwork">
        <button className={classes.menuBtn}>Steelwork</button>
      </Link>
      <Link className={classes.blueLink} to="./scaffolding">
        <button className={classes.menuBtn}>Scaffolding</button>
      </Link>

      <Link className={classes.blueLink} to="/gallery">
        <button className={classes.menuBtn}>Gallery</button>
      </Link>

      <Link className={classes.blueLink} to="/comments">
        <button className={classes.menuBtn}>Comments</button>
      </Link>
      <Link className={classes.blueLink} to="/about">
        <button className={classes.menuBtn}>About Us</button>
      </Link>
      <Link className={classes.blueLink} to="/getquote">
        <button className={classes.menuBtn}>Contact Us</button>
      </Link>
      {isAuthenticated() &&
        isAuthenticated().user.email === 'areklondon1@gmail.com' && (
          <Link to="/admin">Admin</Link>
        )}
      {isAuthenticated() &&
        isAuthenticated().user.email === 'areklondon1@gmail.com' && (
          <button
            className={classes.logout}
            onClick={() => signout(() => window.location.reload())}
          >
            Logout
          </button>
        )}
    </div>
  )
}

export default Menu
