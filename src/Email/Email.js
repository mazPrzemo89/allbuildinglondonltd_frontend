import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { sendEmailAPI } from '../Admin/APIs/EmailAPI'
import classes from '../Comments/Comments.module.css'
import styles from '../MainComponents/About.module.css'
import css from './Email.module.css'
import Layout from '../Layout/Layout'

const Email = () => {
  const [msgValues, setMsgValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const sendMessage = (e) => {
    e.preventDefault()
    sendEmailAPI(msgValues).then((data, err) => {
      if (err) {
        console.log('something went wrong')
      } else {
        setSent(true)
      }
    })
  }

  const handleChange = (name) => (event) => {
    const value = event.target.value
    setMsgValues({ ...msgValues, [name]: value })
  }
  const emailFormJSX = () => {
    return (
      <div className={classes.commentForm}>
        {/* <p className={classes.formTitle}>Get quote!</p> */}
        <form onSubmit={sendMessage} className={classes.selectDiv}>
          <p className={classes.nameLabel}>name</p>
          <div className={classes.customerDiv}>
            <input
              type="name"
              className={classes.nameInputbox}
              onChange={handleChange('name')}
            ></input>
          </div>
          <p className={classes.nameLabel}>phone</p>
          <div className={classes.customerDiv}>
            <input
              type="phone"
              className={classes.nameInputbox}
              onChange={handleChange('phone')}
            ></input>
          </div>
          <p className={classes.nameLabel}>email</p>
          <div className={classes.customerDiv}>
            <input
              type="email"
              className={classes.nameInputbox}
              onChange={handleChange('email')}
            ></input>
          </div>
          <div className={classes.textDiv}>
            <p className={classes.nameLabel}>message</p>
            <textarea
              type="message"
              className={classes.textContent}
              onChange={handleChange('message')}
            ></textarea>
          </div>
          <div className={classes.catBtn}>
            <button className={classes.commentBtn}>Send</button>
          </div>
        </form>
      </div>
    )
  }

  const infoJSX = () => {
    return (
      <div className={styles.contactDiv}>
        <div className={styles.emailIcon}></div>
        <p className={styles.emailValue}> areklondon1@gmail.com</p>
        <div className={styles.phoneIcon}></div>
        <p className={styles.phoneValue}> 07412524967</p>
        <div className={styles.addresIcon}></div>
        <p className={styles.adressValue}> 4 Haling Road, CR2 6HS</p>
      </div>
    )
  }

  const titleMessageJSX = () => <h1 className={css.title}>Give us a call</h1>

  const quoteMessageJSX = () => (
    <h1 className={css.title}>Or get a quote now!</h1>
  )

  return (
    <Layout>
      {titleMessageJSX()}
      <div className={css.borderTop}></div>
      {infoJSX()}
      <div className={css.borderTop}></div>
      {quoteMessageJSX()}
      {emailFormJSX()}
      {sent && <Redirect to="/confirmationemail" />}
    </Layout>
  )
}

export default Email
