import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Gallery.module.css'
import { photosByCategoryId, deletePhoto } from '../Admin/APIs/PhotoApis'
import { getCatIds } from '../Admin/APIs/CategoryAPIs'
import { isAuthenticated } from '../Admin/auth/index'
import Spinner from './Spinner'
import Layout from '../Layout/Layout'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const [categoryData, setCatIds] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentCategoryId, setCurrentCategoryId] = useState('')
  const [isLoading, setLoading] = useState(false)

  const { user, token } = isAuthenticated()

  const isAdmin = isAuthenticated() && user.email === 'areklondon1@gmail.com'
  console.log(useHistory().location.pathname === '/gallery')
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
    if (window.innerWidth < 430) {
      window.scroll(0, 600)
    }
    loadPhotos(e.target.value)
    setCurrentCategoryId(e.target.value)
    setCurrentCategory(e.target.name)
    setLoading(true)
  }

  const deleteClicked = (event) => {
    deletePhoto(user._id, token, event.target.value).then(() => {
      loadPhotos(currentCategoryId)
      setCurrentCategory(currentCategory)
      setLoading(true)
    })
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

  const photosToRenderJSX = () => {
    return (
      <div className={classes.grid}>
        {console.log(photos)}
        {photos.length > 0 &&
          photos.map((data, i) => {
            console.log(data)
            return (
              <div className={classes.galleryDiv} key={i}>
                <img
                  className={classes.gridImg}
                  key={i}
                  alt="photo"
                  src={data.photo}
                />
                <button
                  style={{ display: isAdmin ? '' : 'none' }}
                  value={data._id}
                  onClick={(event) => {
                    deleteClicked(event)
                  }}
                  className={classes.delPhoto}
                >
                  Delete Photo
                </button>
              </div>
            )
          })}
      </div>
    )
  }

  const galleryTitleJSX = () => (
    <div className={classes.galleryTitleDiv}>
      <p className={classes.galleryTitle}>{currentCategory}</p>
    </div>
  )

  const galleryMessageJSX = () => {
    const noCategory = 'Choose category!'
    const yesCategory = 'Take a look at out latest work!'
    return (
      <p className={classes.gallerySecond}>
        {currentCategory ? yesCategory : noCategory}
      </p>
    )
  }
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
      {galleryMessageJSX()}
      <div className={classes.bottom}></div>
      {isLoading && spinnerDiv()}
      {currentCategory === !'' && spinnerDiv()}
      {photos.length > 0 && galleryTitleJSX()}
      {photos.length > 0 && photosToRenderJSX()}
    </Layout>
  )
}

export default Gallery
