import React from 'react'
import classes from './Confirmation.module.css'
import Layout from '../Components/Layout/Layout'

const emailConf = () => {
  return (
    <Layout>
      <h1 className={classes.message}>Your message was sent successfully.</h1>
    </Layout>
  )
}

export default emailConf
