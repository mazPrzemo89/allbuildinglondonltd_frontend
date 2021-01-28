import React, { Fragment } from 'react'
import classes from './Comment.module.css'
import { isAuthenticated } from '../Admin/auth'
import { deleteComAPI, confirmCommentAPI } from '../Admin/APIs/CommentsApis'
import StarRatings from 'react-star-ratings'

const Comment = ({ comment }) => {
  // Copyright 2018 Eric Kennedy

  // Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  // 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

  // 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  // 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

  // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  const { user, token } = isAuthenticated()

  const deleteComment = (e) => {
    let commentId = e.target.value
    deleteComAPI(user._id, token, commentId).then((data, err) => {
      if (err) {
        return alert('Something went wrong')
      } else {
        window.location.reload()
      }
    })
  }

  const confirmComment = (id) => {
    confirmCommentAPI(user._id, token, id).then((data, err) => {
      if (err) {
        return alert('Something went wrong')
      } else {
        window.location.reload()
      }
    })
  }

  return (
    <Fragment>
      <div className={classes.comment}>
        <p className={classes.content}>{comment.content}</p>
        <div className={classes.starDiv}>
          <StarRatings
            rating={comment.rating}
            starDimension="1.7rem"
            starRatedColor="orange"
            numberOfStars={comment.rating}
            name="rating"
          />
        </div>
        <button
          style={{
            display:
              isAuthenticated() && user.email === 'areklondon1@gmail.com'
                ? ''
                : 'none',
          }}
          className={classes.deleteBtn}
          value={comment._id}
          onClick={(e) => deleteComment(e)}
        >
          delete
        </button>
        <button
          style={{
            display:
              isAuthenticated() &&
              user.email === 'areklondon1@gmail.com' &&
              comment.confirmed === false
                ? ''
                : 'none',
          }}
          className={classes.confirmBtn}
          onClick={() => confirmComment(comment._id)}
        >
          confirm
        </button>
        <p className={classes.name}>-{comment.name}</p>
      </div>
    </Fragment>
  )
}

export default Comment
