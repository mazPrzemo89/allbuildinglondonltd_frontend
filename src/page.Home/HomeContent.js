import React from 'react'
import { Link } from 'react-router-dom'
import classes from './HomeContent.module.css'
import construction from '../images/construction.jpg'
import steelwork from '../images/steelwork.jpg'
import scaffolding from '../images/scaffolding.jpg'

const HomeContent = () => {
  const clicked = () => {
    window.scroll(0, 0)
  }

  return (
    <div className={classes.upContentContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.imageDescription}>
          Construction Work Carried
          <br /> out by our team!
        </div>
        <div
          className={classes.imageDiv}
          style={{ backgroundImage: 'url(' + steelwork + ')' }}
        ></div>

        <Link className={classes.blueLink} to="./construction">
          <button onClick={clicked} className={classes.btn}>
            More Pictures!
          </button>
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.imageDescription}>
          Heavy?
          <br /> Yes, its steel work!
        </div>
        <div
          className={classes.imageDiv}
          style={{ backgroundImage: 'url(' + construction + ')' }}
        ></div>

        <Link className={classes.blueLink} to="./steelwork">
          <button onClick={clicked} className={classes.btn}>
            More Heavy Stuff!
          </button>
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.imageDescription}>
          Scaffolding
          <br />
          Always have a cover!
        </div>
        <div
          className={classes.imageDiv}
          style={{ backgroundImage: 'url(' + scaffolding + ')' }}
        ></div>

        <Link className={classes.blueLink} to="./scaffolding">
          <button onClick={clicked} className={classes.btn}>
            Scaffolding Service!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeContent
