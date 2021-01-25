import { API } from '../../config'

export const createCat = (userId, token, data) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const deleteCat = (userId, token, id) => {
  console.log(JSON.stringify(id))
  return fetch(`${API}/category/delete/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getCatIds = () => {
  return fetch(`${API}/category/find`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}
