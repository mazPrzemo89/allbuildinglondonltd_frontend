import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import classes from './Scaffolding.module.css'

const Scaffolding = () => (
  <Layout>
    <div className={classes.scaffoldingContainer}>
      <div className={classes.scaffoldingContent}>
        <div className={classes.borderTop}></div>
        <div>
          <p className={classes.scaffTitle}>We can supply a Scaffolding!</p>
          <p className={classes.scaffQuote}>
            We have a very reliable team that works with us for more than 3
            years and they are very flexible and they can install scaffolding to
            any kind of work, from loft conversions to gianatic extensions!
            <br />
            <br /> If you would like a quote for scaffolding instalaltion we can
            eaisly get it for you, for free!{' '}
          </p>
        </div>
        <div className={classes.scaffImage}></div>
      </div>
      <div className={classes.scaffoldingBottom}>
        <div className={classes.scaffBtm}>
          <div className={classes.scaffBtmContent}>
            <div className={classes.scaffPhone}>Call Now! 07412524967</div>
            <Link className={classes.blueLink} to="./">
              <button className={classes.scaffButton}>Get in touch!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Scaffolding
