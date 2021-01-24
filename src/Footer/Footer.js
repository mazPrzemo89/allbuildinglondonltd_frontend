import React from 'react'
import classes from './Footer.module.css'

const Footer = () => (
  <div className={classes.footerDiv}>
    <p className={classes.footerText}>
      © Copyright All Building London LTD 2020. All Rights Reserved.
    </p>
    <div className={classes.borderBottom}></div>
  </div>
)

export default Footer
