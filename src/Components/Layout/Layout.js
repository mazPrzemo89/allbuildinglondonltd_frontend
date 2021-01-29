import classes from './Layout.module.css'
import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className={classes.main}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </Fragment>
  )
}

export default Layout
