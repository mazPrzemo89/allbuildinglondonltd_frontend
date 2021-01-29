import classes from './Layout.module.css'
import React from 'react'
import AUX from '../../Utils/Aux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <AUX>
      <div className={classes.main}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </AUX>
  )
}

export default Layout
