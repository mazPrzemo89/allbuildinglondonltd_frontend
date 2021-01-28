import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import Layout from '../Components/Layout/Layout'
import { isAuthenticated } from '../Admin/auth'
import {
  fetchUnconfirmedComments,
  fetchConfirmedComments,
  postCommentAPI,
} from '../APIs/CommentsApis'

import Comment from './Comment'
import classes from './Comments.module.css'

const Comments = () => {
  //     Copyright 2018 Eric Kennedy

  // Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  // 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

  // 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  // 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

  // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  const { user, token } = isAuthenticated()
  const [posted, setPosted] = useState(false)
  const [confirmedComments, setConfComments] = useState([])
  const [commentValues, setCommentValues] = useState({
    content: '',
    name: '',
    rating: 5,
  })

  const init = () => {
    let fileterdComments = []
    let unfilteredComments = []
    let allComments = []
    fetchConfirmedComments().then((data, err) => {
      if (data) {
        fileterdComments = data.reverse()
        setConfComments(fileterdComments)
      } else {
        console.log(err)
      }
    })
    if (isAuthenticated() && user.email === 'areklondon1@gmail.com') {
      fetchUnconfirmedComments(user._id, token).then((data, err) => {
        if (data) {
          unfilteredComments = data.reverse()
          allComments = fileterdComments.concat(unfilteredComments)
          setConfComments(allComments)
        } else {
          console.log(err)
        }
      })
    }
  }

  useEffect(() => {
    init()
  }, [])

  const postComment = (e) => {
    e.preventDefault()
    postCommentAPI(commentValues).then((data, err) => {
      if (data) {
        setPosted(true)
      } else {
        alert(err.error)
      }
    })
  }

  const changeRating = (newRating) => {
    setCommentValues({ ...commentValues, rating: newRating })
  }

  const handleChange = (name) => (event) => {
    const value = event.target.value
    setCommentValues({ ...commentValues, [name]: value })
  }

  const commentFormJSX = () => {
    return (
      <div className={classes.commentForm}>
        <p className={classes.formTitle}>Post a comment</p>
        <form onSubmit={postComment} className={classes.selectDiv}>
          <p className={classes.nameLabel}>Name</p>
          <div className={classes.customerDiv}>
            <input
              type="name"
              className={classes.nameInputbox}
              onChange={handleChange('name')}
              value={commentValues.name}
            ></input>
          </div>
          <div className={classes.textDiv}>
            <p className={classes.nameLabel}>Comment</p>
            <textarea
              type="content"
              className={classes.textContent}
              onChange={handleChange('content')}
              value={commentValues.content}
            ></textarea>
          </div>
          <div className={classes.ratingDiv}>
            <p className={classes.nameLabel}>Rating</p>
            <div className={classes.startDiv}>
              <StarRatings
                rating={commentValues.rating}
                starRatedColor="orange"
                starDimension="2rem"
                changeRating={changeRating}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>
          <div className={classes.catBtn}>
            <button className={classes.commentBtn}>Post</button>
          </div>
        </form>
      </div>
    )
  }

  const commentsJSX = () => {
    console.log(confirmedComments)
    return (
      <Fragment>
        {confirmedComments.length > 0 &&
          confirmedComments.map((com, i) => {
            return <Comment key={i} comment={com} />
          })}
      </Fragment>
    )
  }

  const sectionTitleJSX = () => {
    return (
      <Fragment>
        <p className={classes.sectionTitle}>Comment section</p>
        <div className={classes.borderBottom}></div>
      </Fragment>
    )
  }

  return (
    <Layout>
      {sectionTitleJSX()}
      {confirmedComments.length > 0 && commentsJSX()}
      {commentFormJSX()}
      {posted && <Redirect to="/confirmation" />}
    </Layout>
  )
}

export default Comments
