import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { isAuthenticated } from '../Admin/auth'
import { createCat, getCatIds, deleteCat } from './APIs/CategoryAPIs'
import { postPhoto } from './APIs/PhotoApis'
import classes from './Admin.module.css'

const Dashboard = () => {
  //Variables
  const [categoryValues, setCatValues] = useState({
    name: '',
    error: '',
    success: false,
    formDataCat: '',
  })
  const [formDataPhoto, setPhotoFormData] = useState('')

  const [categoryData, setCatIds] = useState([])

  const [deleteCatId, setDeleteCatId] = useState('')

  const { name, formDataCat, error } = categoryValues

  const { user, token } = isAuthenticated()
  //Functions
  const init = () => {
    setCatValues({
      ...categoryValues,
      formDataCat: new FormData(),
    })
    setPhotoFormData(new FormData())
  }

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
      }
    })
  }

  const deleteCategory = () => {
    console.log(deleteCatId)
    deleteCat(user._id, token, deleteCatId)
  }

  useEffect(() => {
    init()
    getCategories()
  }, [])

  //Megre the two functions
  const handleChangeCategory = (name) => (event) => {
    const value = name === 'image' ? event.target.files[0] : event.target.value
    formDataCat.set(name, value)
    setCatValues({ ...categoryValues, [name]: value })
  }

  const handleChangePhoto = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formDataPhoto.set(name, value)
  }
  // Think about mergint these Two
  const submitCategory = (e) => {
    e.preventDefault()

    createCat(user._id, token, formDataCat).then((data) => {})
  }
  const submitPhoto = (e) => {
    e.preventDefault()
    postPhoto(user._id, token, formDataPhoto).then((data) => {})
  }
  //JSX Returning functions
  const categoryForm = () => (
    <div className={classes.formWrapper}>
      <p className={classes.formTitle}>Create gallery category</p>
      <form onSubmit={submitCategory} className={classes.formDiv}>
        <p className={classes.nameLabel}>Name</p>
        <div className={classes.catName}>
          <input
            type="text"
            className={classes.nameInputbox}
            onChange={handleChangeCategory('name')}
            value={name}
          ></input>
        </div>
        <div className={classes.catPhoto}>
          <input
            style={{ width: '100%' }}
            onChange={handleChangeCategory('image')}
            type="file"
            name="image"
            accept="image/*"
          />
        </div>
        <div className={classes.catBtn}>
          <button className={classes.submitBtn}>Create category</button>
        </div>
      </form>
    </div>
  )

  const deleteCategoryForm = () => (
    <div className={classes.formWrapper}>
      <div className={classes.formTitle}>Delete gallery category</div>
      <div className={classes.selectDiv}>
        <select
          className={classes.selectEl}
          onChange={(event) => {
            setDeleteCatId(event.target.value)
          }}
          for="categories"
        >
          <option className={classes.selectEl}>Select category</option>
          {categoryData &&
            categoryData.map((data, i) => {
              return (
                <option key={i} value={data.id}>
                  {data.name}
                </option>
              )
            })}
        </select>
        <div className={classes.catBtn}>
          <button onClick={deleteCategory} className={classes.deleteBtn}>
            Delete category
          </button>
        </div>
      </div>
    </div>
  )

  const photoForm = () => (
    <div className={classes.formWrapper}>
      <p className={classes.formTitle}>Post photo</p>
      <form onSubmit={submitPhoto} className={classes.formDiv}>
        <div className={classes.selectDiv}>
          <select
            className={classes.selectPhotoCat}
            onChange={handleChangePhoto('category')}
            for="categories"
          >
            <option className={classes.selectEl}>Select category</option>
            {categoryData &&
              categoryData.map((data, i) => {
                return (
                  <option key={i} value={data.id}>
                    {data.name}
                  </option>
                )
              })}
          </select>
        </div>
        <div className={classes.catPhoto}>
          <input
            style={{ width: '100%' }}
            onChange={handleChangePhoto('photo')}
            type="file"
            name="photo"
            accept="image/*"
          />
        </div>
        <div className={classes.catBtn}>
          <button className={classes.submitBtn}>Post photo</button>
        </div>
      </form>
    </div>
  )

  return (
    <Layout>
      {categoryForm()}
      {deleteCategoryForm()}
      {photoForm()}
    </Layout>
  )
}

export default Dashboard
