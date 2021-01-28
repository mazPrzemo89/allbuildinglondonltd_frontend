import React from 'react'
import classes from './Confirmation.module.css'
import Layout from '../Components/Layout/Layout'

const CommentConf = () => {
  return (
    <Layout>
      <h1 className={classes.message}>
        Thank you for posting, your comment is awaiting confirmation.
      </h1>
    </Layout>
  )
}

export default CommentConf
