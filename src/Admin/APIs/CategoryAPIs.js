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
