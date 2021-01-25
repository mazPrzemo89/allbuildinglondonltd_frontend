import React, { useState, useEffect } from 'react'
import classes from './Gallery.module.css'
import { photosByCategoryId } from '../Admin/APIs/PhotoApis'
import { getCatIds } from '../Admin/APIs/CategoryAPIs'
import Spinner from './Spinner'
import Layout from '../Layout/Layout'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const [categoryData, setCatIds] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [isLoading, setLoading] = useState(false)

  const getCategories = () => {
    getCatIds().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        let ids = []
        data.map((e) => {
          ids.push({ id: e._id, name: e.name })
        })
        setCatIds(ids)
        console.log(ids)
      }
    })
  }

  const loadPhotos = (id) => {
    setPhotos([])
    photosByCategoryId(id).then((data, err) => {
      if (err) {
        console.log(err)
      }
      setPhotos(data)
      setLoading(false)
    })
  }

  const init = () => {
    getCategories()
  }

  useEffect(() => {
    init()
  }, [])

  const clicked = (e) => {
    loadPhotos(e.target.value)
    setCurrentCategory(e.target.name)
    setLoading(true)
  }

  const galleryButtons = () => {
    return (
      <div className={classes.buttons}>
        {categoryData.length > 0 &&
          categoryData.map((btn, i) => {
            return (
              <button
                key={i}
                value={btn.id}
                name={btn.name}
                className={classes.galleryButtons}
                onClick={(event) => {
                  clicked(event)
                }}
              >
                {btn.name}
              </button>
            )
          })}
      </div>
    )
  }

  const photosToRender = () => {
    return (
      <div className={classes.grid}>
        {console.log(photos)}
        {photos.length > 0 &&
          photos.map((data, i) => {
            return (
              <div className={classes.galleryDiv} key={i}>
                <img
                  className={classes.gridImg}
                  key={i}
                  alt="photo"
                  src={data.photo}
                />
              </div>
            )
          })}
      </div>
    )
  }

  const galleryTitle = () => (
    <div className={classes.galleryTitleDiv}>
      <p className={classes.galleryTitle}>{currentCategory}</p>
    </div>
  )
  const spinnerDiv = () => {
    return (
      <div className={classes.spinMain}>
        <div className={classes.spinDiv}>
          <Spinner />
          <p className={classes.gallerySecond}>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className={classes.upper}></div>
      <p className={classes.galleryMain}>Gallery</p>
      {galleryButtons()}
      <p className={classes.gallerySecond}>Take a look at out latest work!</p>

      <div className={classes.bottom}></div>
      {isLoading && spinnerDiv()}
      {currentCategory === !'' && spinnerDiv()}
      {photos.length > 0 && galleryTitle()}
      {photos.length > 0 && photosToRender()}
    </Layout>
  )
}

export default Gallery
