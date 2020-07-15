const endpoint = 'http://localhost:1717'

// const checkResponse = (response, errText) => {
//   if (!response.ok) throw new Error(errText)
//   return response.json()
// }

const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const getLogin = (body) => (dispatch) => {
  dispatch({ type: 'LOGIN_SUCCESS' })
  fetch(`${endpoint}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) throw response.status
      return response.json()
    })
    .then(({ user }) => {
      window.localStorage.setItem('token', user.token)
      dispatch({ type: 'LOGIN_SUCCESS', token: user.token })
      console.log('data', user)
    })
    .catch((error) => {
      dispatch({ type: 'LOGIN_FAILED', error: errorHandler(error) })
    })
}

export const getToken = (token) => ({
  type: 'GET_TOKEN',
  token,
})

export const getMyProfile = (myProfile) => ({
  type: 'GET_MY_PROFILE',
  myProfile,
})
