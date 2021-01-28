import React, { Fragment } from 'react'
import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Fragment>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div>{props.children}</div>
      </div>
    </Fragment>
  )
}

export default sideDrawer
