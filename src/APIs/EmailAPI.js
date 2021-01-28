import { API } from '../config'

export const sendEmailAPI = (message) => {
  console.log(message)
  return fetch(`${API}/email/send`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(message),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}
