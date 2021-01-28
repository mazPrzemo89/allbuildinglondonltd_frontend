import React from 'react'
import classes from './HeaderSec.module.css'
import { Link } from 'react-router-dom'

const HeaderSec = () => (
  <div className={classes.headerSec}>
    <Link className={classes.secHeaderLink} to="/getquote">
      Give us a call and get a free quote!
    </Link>
  </div>
)

export default HeaderSec
