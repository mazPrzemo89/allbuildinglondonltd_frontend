import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import classes from './Scaffolding.module.css'

const Scaffolding = () => (
  <Layout>
    <div className={classes.scaffoldingContainer}>
      <div className={classes.scaffoldingContent}>
        <div className={classes.borderTop}></div>

        <p className={classes.scaffTitle}>We can supply a Scaffolding!</p>
        <p className={classes.scaffQuote}>
          We have got a very reliable team that works with us for more than 3
          years, they are very flexible and they can install scaffolding to any
          type of job, from loft conversions to any size extensions!
          <br />
          <br /> If you would like a quote for scaffolding instalaltion you can
          do it directly from the <a href="/getquote">Contact us page</a>, free
          of charge!
        </p>

        <div className={classes.scaffImage}></div>
      </div>
      <div className={classes.scaffoldingBottom}>
        <div className={classes.scaffBtm}>
          <div className={classes.scaffBtmContent}>
            <div className={classes.scaffPhone}>Call Now! 07412524967</div>
            <Link className={classes.blueLink} to="./getquote">
              <button className={classes.scaffButton}>Get a quote!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Scaffolding
