import { API } from '../../config'

export const signin = (user) => {
  return fetch(`${API}/user/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt')
    next()
    return fetch(`${API}/user/signout`, {
      method: 'GET',
    })
      .then((response) => {})
      .catch((err) => console.log(err))
  }
}

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false
  }
}

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data))
    next()
  }
}
