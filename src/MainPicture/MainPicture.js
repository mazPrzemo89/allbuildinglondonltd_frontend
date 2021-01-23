import React from 'react'
import classes from './MainPicture.module.css'

const MainPicture = () => (
  <div className={classes.mainPictureDiv}>
    <div className={classes.mainPicture}></div>
    <div className={classes.pictureTextDiv}>
      <div className={classes.pictureText}>
        We can build whatever our customer has in mind and we work 6 days a
        week.
      </div>
    </div>
  </div>
)

export default MainPicture
