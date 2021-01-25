import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { isAuthenticated } from '../Admin/auth'
import classes from './Admin.module.css'

const Dashboard = () => {
  const [categoryValues, setCatValues] = useState({
    name: '',
    photo: '',
    error: '',
    success: false,
    formData: new FormData(),
  })

  const { name, photo, formData, error } = categoryValues

  const { user, token } = isAuthenticated()

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setCatValues({ ...categoryValues, [name]: value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
  }

  const categoryForm = () => (
    <div className={classes.formWrapper}>
      <p className={classes.formTitle}>Create category</p>
      <form onSubmit={clickSubmit} className={classes.formDiv}>
        <p className={classes.nameLabel}>Name</p>
        <div className={classes.catName}>
          <input
            type="text"
            className={classes.nameInputbox}
            onChange={handleChange('name')}
            value={name}
          ></input>
        </div>
        <div className={classes.catPhoto}>
          <input
            style={{ width: '100%' }}
            onChange={handleChange('photo')}
            type="file"
            name="photo"
            accept="image/*"
          />
        </div>
        <div className={classes.catBtn}>
          <button className={classes.submitBtn}>Create category</button>
        </div>
      </form>
    </div>
  )

  return <Layout>{categoryForm()}</Layout>
}

export default Dashboard
