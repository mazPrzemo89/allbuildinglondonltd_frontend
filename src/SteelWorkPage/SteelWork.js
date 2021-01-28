import React from 'react'
import Layout from '../Layout/Layout'
import classes from './SteelWork.module.css'

const ConstructionWork = () => (
  <Layout>
    <div className={classes.borderTop}></div>
    <div className={classes.steelWorkDiv}>
      <p className={classes.steelTitle}>Steel Work</p>
      <div className={classes.bckgImg}></div>
      <div className={classes.modal}></div>
    </div>
    <div className={classes.steelWorkContent}>
      <p className={classes.quoteTitle}>Steel Fitting</p>
      <p className={classes.quoteContent}>
        We are a professional and steel work is one of our strongest sides, we
        can fit any steel that is required and we are doing it with all the
        safety regulations because our people are important to us as much as our
        customers!
      </p>

      <div className={classes.steelWorkPic}></div>
      <div className={classes.steelBottomPic}></div>
    </div>
  </Layout>
)

export default ConstructionWork
