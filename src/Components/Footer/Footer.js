import React from 'react'
import classes from './Footer.module.css'

const Footer = () => (
  <div className={classes.footerDiv}>
    <p className={classes.footerText}>
      © Copyright All Building London LTD 2020. All Rights Reserved.<br></br>
      Created by{' '}
      <a
        style={{ color: 'black' }}
        href="https://www.linkedin.com/in/przemyslaw-mazur-7950171b3/"
      >
        Przemyslaw Mazur
      </a>
    </p>
    <div className={classes.borderBottom}></div>
  </div>
)

export default Footer
