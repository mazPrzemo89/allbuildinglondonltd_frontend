import React from 'react'
import classes from './UpperContent.module.css'

const UpperContent = () => (
  <div className={classes.upContentContainer}>
    <div className={classes.imageDescription}>
      Construction Work Carried
      <br /> out by our team!
    </div>
    <div className={classes.imageDiv}></div>
    <button className={classes.btn}>More Pictures!</button>
    <div className={classes.imageDescription}>
      Heavy?
      <br /> Yes, its steel work!
    </div>
    <div className={classes.imageHeavy}></div>
    <button className={classes.btn}>More Heavy Stuff!</button>
    <div className={classes.imageDescription}>
      Scaffolding
      <br />
      Always have a cover!
    </div>
    <div className={classes.imageScaff}></div>
    <button className={classes.btn}>Scaffolding Service!</button>
  </div>
)

export default UpperContent
