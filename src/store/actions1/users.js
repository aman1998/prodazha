const endpoint = 'http://localhost:1717'

export const getUsers = () => (dispatch) => {
  dispatch({ type: 'GET_USERS_LOADING' })
  fetch(`${endpoint}/users-list`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'GET_USERS_SUCCESS', data })
    })

  // fetch(`${endpoint}/profile`, {
  //   method: 'GET',
  //   headers: { 'X-Auth': `${token}` },
  // })
  //   .then((response) => checkResponse(response, 'Ошибка загрузки'))
  //   .then((data) => {
  //     dispatch({ type: 'GET_USERS_SUCCESS', data })
  //   })
  //   .catch((error) => {
  //     dispatch({ type: 'GET_USERS_FAILED', error: errorHandler(error) })
  //   })
}

export const getFavoritesList = (favoritesData) => ({
  type: 'GET_FAVORITES_LIST',
  favoritesData,
})
