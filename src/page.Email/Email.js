import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { sendEmailAPI } from '../APIs/EmailAPI'
import classes from '../page.Comments/Comments.module.css'
import styles from '../page.About/About.module.css'
import css from './Email.module.css'
import MapContainer from '../Components/Map/Map'
import Layout from '../Components/Layout/Layout'

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
    if (
      msgValues.name === '' ||
      msgValues.phone === '' ||
      msgValues.email === '' ||
      msgValues.message === ''
    ) {
      alert('Please fill all fields')
      return ''
    }

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
        <form onSubmit={sendMessage} className={classes.selectDiv}>
          <p className={classes.nameLabel}>Name</p>
          <div className={classes.customerDiv}>
            <input
              type="name"
              className={classes.nameInputbox}
              onChange={handleChange('name')}
            ></input>
          </div>
          <p className={classes.nameLabel}>Phone</p>
          <div className={classes.customerDiv}>
            <input
              type="phone"
              className={classes.nameInputbox}
              onChange={handleChange('phone')}
            ></input>
          </div>
          <p className={classes.nameLabel}>Email</p>
          <div className={classes.customerDiv}>
            <input
              type="email"
              className={classes.nameInputbox}
              onChange={handleChange('email')}
            ></input>
          </div>
          <div className={classes.textDiv}>
            <p className={classes.nameLabel}>Message</p>
            <textarea
              type="message"
              className={classes.textContent}
              onChange={handleChange('message')}
            ></textarea>
          </div>
          <div className={classes.catBtn} style={{ marginTop: '10px' }}>
            <button className={classes.commentBtn}>Send</button>
          </div>
        </form>
      </div>
    )
  }

  const infoJSX = () => {
    return (
      <div className={styles.contactDiv}>
        <div className={styles.phoneIcon}></div>
        <p className={styles.phoneValue}> 07412524967</p>
        <div className={styles.emailIcon}></div>
        <p className={styles.emailValue}> email@email.com</p>
        <div className={styles.addresIcon}></div>
        <p className={styles.adressValue}> 4 Haling Road, CR2 6HS</p>
      </div>
    )
  }

  const titleMessageJSX = () => (
    <h1 className={css.title} style={{ marginTop: '4rem' }}>
      Give us a call
    </h1>
  )

  const quoteMessageJSX = () => <h1 className={css.title}>Get a quote now</h1>

  const mapJSX = () => {
    return (
      <div className={css.mapDiv}>
        <MapContainer />
      </div>
    )
  }

  return (
    <Layout>
      {quoteMessageJSX()}

      {emailFormJSX()}
      {titleMessageJSX()}

      {infoJSX()}
      {/* {mapJSX()} */}

      {sent && <Redirect to="/confirmationemail" />}
    </Layout>
  )
}

export default Email
