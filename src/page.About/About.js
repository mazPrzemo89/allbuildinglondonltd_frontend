import React from 'react'
import classes from './About.module.css'
import Layout from '../Components/Layout/Layout'

const About = () => (
  <Layout>
    <div>
      <div className={classes.borderTop}></div>
      <p className={classes.aboutTitle}>
        Learn more about All Building London Limited!
      </p>
      <p className={classes.aboutContent}>
        We are expert building consultants offering all building services
        including: construction work, steelwork and scaffolding services. Our
        aim is to provide safe, affordable solutions and deliver every job with
        absolute professionalism and to high standards.
        <br />
        <br />
        We can proudly say that our team is led by a very experienced
        professional, with over 30 years of expertise. We take pride in making
        sure everything is done to the highest standard and there is not a job
        too challenging for our expert consultant, who will provide you with a
        wide range of all your buildings needs. <br />
        <br />
        Our team consist of Polish professional, certified builders, who are
        multi skilled and specialist in plumbing and electrical work. They are
        experts in their field. We can assure our clients are in safe hands, as
        well as receive the highest standard and a job WELL DONE and LEGALLY.
        <br />
        <br />
        We are based is Croydon area and we operate within a 15 mile radius.
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
