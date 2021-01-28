import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Menu from './Menu'
import SideDrawer from '../../Utils/SideDrawer/SideDrawer'
import Hamburger from '../../Utils/DrawerToggle/DrawerToggle'
import Backdrop from '../../Utils/Backdrop/Backdrop'
import classes from './Header.module.css'

const Header = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div className={classes.header}>
      <div
        onClick={() => {
          history.push('/')
        }}
        className={classes.logoWrapper}
      >
        <div className={classes.logoDiv}></div>
      </div>
      <div onClick={toggleShow} className={classes.menu}>
        <Hamburger />
        <div className={classes.menuTitleDiv}>
          <p>M&nbsp; e&nbsp; n&nbsp; u</p>
        </div>
        <Backdrop show={show} clicked={toggleShow} />
        <SideDrawer open={show} closed={toggleShow}>
          <Menu />
        </SideDrawer>
      </div>
    </div>
  )
}

export default Header
