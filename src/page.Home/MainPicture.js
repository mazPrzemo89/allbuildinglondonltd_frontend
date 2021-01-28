import React from 'react'
import classes from './MainPicture.module.css'

const MainPicture = () => (
  <div className={classes.mainPictureDiv}>
    <div className={classes.mainPicture}></div>
    <div className={classes.pictureTextDiv}>
      <div className={classes.pictureText}>
        We work 6 days a week and we can build whatever our customer has in
        mind.
      </div>
    </div>
  </div>
)

export default MainPicture
