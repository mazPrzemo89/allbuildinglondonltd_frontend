import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { isAuthenticated } from '../Admin/auth'
import { getCatIds, deleteCat, createNewCat } from './APIs/CategoryAPIs'
import { postPhoto } from './APIs/PhotoApis'
import classes from './Admin.module.css'

const Dashboard = () => {
  //Variables
  const [categoryName, setCatName] = useState('')
  const [formDataPhoto, setPhotoFormData] = useState('')

  const [categoryData, setCatIds] = useState([])

  const [deleteCatId, setDeleteCatId] = useState('')

  const { user, token } = isAuthenticated()
  //Init functions
  const init = () => {
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

  useEffect(() => {
    init()
    getCategories()
  }, [])

  //State change handlers
  const handleChangeCategory = (event) => {
    setCatName(event.target.value)
  }

  const handleChangePhoto = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formDataPhoto.set(name, value)
  }
  // API functions
  const submitCategory = (e) => {
    e.preventDefault()
    if (categoryName === '') {
      return alert('Please provide a name')
    }
    createNewCat(user._id, token, categoryName).then((data, err) => {
      if (data) {
        alert('Category created')

        return
      } else {
        alert('Something went wrong...')
        window.location.reload()
        return
      }
    })
  }
  const submitPhoto = (e) => {
    e.preventDefault()
    postPhoto(user._id, token, formDataPhoto).then((data, err) => {
      if (data) {
        alert('Photo uploaded')
        window.location.reload()
        return
      } else {
        return alert(err.error)
      }
    })
  }

  const deleteCategory = () => {
    console.log(deleteCatId)
    deleteCat(user._id, token, deleteCatId).then((data, err) => {
      if (data) {
        alert(data)
        window.location.reload()
        return
      }
      return alert('Server error')
    })
  }
  //JSX Returning functions
  const categoryForm = () => (
    <div className={classes.formWrapper}>
      <p className={classes.formTitle}>Create gallery category</p>
      <form onSubmit={submitCategory} className={classes.selectDiv}>
        <p className={classes.nameLabel}>Name</p>
        <div className={classes.catName}>
          <input
            type="text"
            className={classes.nameInputbox}
            onChange={(event) => handleChangeCategory(event)}
            value={categoryName}
          ></input>
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
