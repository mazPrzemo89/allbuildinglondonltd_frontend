import React from 'react'
import classes from './About.module.css'
import Layout from '../Layout/Layout'

const About = () => (
  <Layout>
    <div>
      <div className={classes.borderTop}></div>
      <p className={classes.aboutTitle}>
        Learn more about All Building London Limited!
      </p>
      <p className={classes.aboutContent}>
        Firstly, we can proudly say that our team is led by a very experienced
        person that can handle any type of situation, his experience is reaching
        more than 30 years!
        <br />
        <br /> He is always able to answer questions you would like to ask,
        always happy to help if you need any advice and always looking to
        achieve the best outcome possible! We are always making sure everything
        is done to the highest standard and there is not a job that can
        challenge us a make us to gave up. <br />
        <br /> People that are working for us are polish professional builders
        that are just waiting to get their hands on the job and create a smile
        on our customers faces! <br />
        <br /> We have a team that can handle Plumbing and electrical work, our
        people are holding all the certificates needed to make the customer safe
        in our hands that he will receive the highest standard and to job done
        legally! We are based is Croydon area but we operate up to 15 miles from
        our company place! <br />
        <br />
        <p className={classes.aboutTitle}>Any Questions?</p> <br />
      </p>
      <div className={classes.contactDiv}>
        <div className={classes.emailIcon}></div>
        <p className={classes.emailValue}> areklondon0@gmail.com</p>
        <div className={classes.phoneIcon}></div>
        <p className={classes.phoneValue}> 07412524967</p>
        <div className={classes.addresIcon}></div>
        <p className={classes.adressValue}> 4 Haling Road, CR2 6HS</p>
      </div>
    </div>
  </Layout>
)

export default About
