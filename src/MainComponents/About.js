import React from 'react'
import classes from './About.module.css'
import Layout from '../Layout/Layout'

const About = () => (
  <Layout>
    <div className={classes.borderTop}></div>
    <div>
      <div className={classes.borderTop}></div>
      <p className={classes.aboutTitle}>
        Learn more about All Building London Limited!
      </p>
      <p className={classes.aboutContent}>
        Firstly, we can proudly say that our team is led by a very experienced
        professional that can handle any type of job, his been working in the
        field for over 30 years!
        <br />
        <br /> He is always able to answer your questions, always happy to help
        if you need any advice and always looking to achieve the best outcome
        possible! We are always making sure that everything is done according to
        the highest standards, there is no job to difficult for us. <br />
        <br /> Our team is made of polish professional builders and they are
        just waiting to get their hands on the job and make our customers
        satisfied!
        <br />
        <br /> We can handle Plumbing and electrical work, our people are
        holding all the certificates needed to make the customer feel safe and
        relaxed when we are doing our job, we never miss a detail! We are based
        is Croydon area but we operate up to 15 miles from our company location!
        <br />
        <br />
      </p>
      <p className={classes.aboutTitle}>Any Questions?</p> <br />
      <div className={classes.contactDiv}>
        <div className={classes.emailIcon}></div>
        <p className={classes.emailValue}> areklondon1@gmail.com</p>
        <div className={classes.phoneIcon}></div>
        <p className={classes.phoneValue}> 07412524967</p>
        <div className={classes.addresIcon}></div>
        <p className={classes.adressValue}> 4 Haling Road, CR2 6HS</p>
      </div>
    </div>
  </Layout>
)

export default About
