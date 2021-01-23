import classes from './Layout.module.css'
import React, { useEffect } from 'react'
import AUX from '../Utils/Aux'
import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <AUX>
      <div className={classes.main}>
        <Header></Header>
        {children}
      </div>
    </AUX>
  )
}

export default Layout
