import React from 'react'
import Layout from '../Components/Layout/Layout'
import classes from './ConstructionWork.module.css'
import roof from '../images/roof.jpg'
import loft from '../images/loft.png'
import stairs from '../images/stairs2.jpg'

const ConstructionWork = () => (
  <Layout>
    <div className={classes.constructionContent}>
      <div className={classes.constructionTitleDiv}>
        <div className={classes.constructionTitle}>
          Construction Work Carried out by <br /> our professionals!
        </div>
      </div>
      <div className={classes.contentTop}>
        <div
          className={classes.contentTopImg}
          style={{ backgroundImage: 'url(' + roof + ')' }}
        ></div>
        <div className={classes.contentTopText}>
          <p className={classes.contentTopP}>
            The example of our team working on a roof construction. This is what
            you call a well done roofing!
          </p>
        </div>
      </div>
      <div className={classes.quoteDiv}>
        <p className={classes.quote}>
          We are always aiming for the highest quality, that's why all of our
          jobs are done to the highest standards. The team is led by the very
          owner of the company which has more than 30 years of experience!
        </p>
      </div>
      <div className={classes.loftDiv}>
        <div
          className={classes.loftImg}
          style={{ backgroundImage: 'url(' + loft + ')' }}
        ></div>
        <div className={classes.loftQuoteDiv}>
          <p className={classes.loftTitle}>Loft Conversion</p>
          <p className={classes.loftQuote}>
            Here you can see a loft conversion work carried out by our team. We
            are always focused on the details and meat all the requirements!
          </p>
        </div>
      </div>
      <div className={classes.loftDiv}>
        <div
          className={classes.stairsImg}
          style={{ backgroundImage: 'url(' + stairs + ')' }}
        ></div>
        <div className={classes.stairsQuoteDiv}>
          <p className={classes.stairsTitle}>Stairs Fitting</p>
        </div>
      </div>
      <div></div>
    </div>
  </Layout>
)

export default ConstructionWork
