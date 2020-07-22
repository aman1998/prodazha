const ENDOPOINT = 'https://intense-journey-98977.herokuapp.com'
// const ENDOPOINT = 'http://localhost:1717'

// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
  if (!response.ok) throw new Error(errText)
  return response.json()
}
// функция вытаскивает из объекта ошибки строку
const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const showSearchResult = (searchResult) => ({
  type: 'SHOW_SEARCH_RESULT',
  searchResult,
})

export const getSales = () => (dispatch) => {
  dispatch({ type: 'GET_SALES_LOADING' })
  fetch(`${ENDOPOINT}/list`)
    .then((response) => checkResponse(response, 'Ошибка загрузки'))
    .then((data) => {
      dispatch({ type: 'GET_SALES_SUCCESS', data })
      console.log('sales', data)
    })
    .catch((error) => {
      dispatch({ type: 'GET_SALES_FAILED', error: errorHandler(error) })
    })
}

export const deleteSales = (id) => (dispatch) => {
  dispatch({ type: 'DELETE_SALES_LOADING' })
  fetch(`${ENDOPOINT}/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => checkResponse(response, 'Ошибка загрузки'))
    .then((data) => {
      dispatch({ type: 'DELETE_SALES_SUCCESS', data })
    })
    .catch((error) => {
      dispatch({ type: 'DELETE_SALES_FAILED', error: errorHandler(error) })
    })
}

// export const deleteFavoriteSales = (id) => (dispatch) => {
//   dispatch({ type: 'DELETE_FAVORITE_LOADING' })
//   fetch(`http://localhost:1717/favorite-delete/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   })
//     .then((response) => checkResponse(response, 'Ошибка загрузки'))
//     .then((data) => {
//       dispatch({ type: 'DELETE_FAVORITE_SUCCESS', data })
//     })
//     .catch((error) => {
//       dispatch({ type: 'DELETE_FAVORITE_FAILED', error: errorHandler(error) })
//     })
// }

export const addSale = (body) => (dispatch) => {
  dispatch({ type: 'ADD_TODO_LOADING' })
  fetch(`${ENDOPOINT}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Ошибка добавления'))
    .then((data) => {
      dispatch({ type: 'ADD_SALE_SUCCESS' })
      console.log('data', data)
    })
    .catch((error) => {
      dispatch({ type: 'ADD_SALE_FAILED', error: errorHandler(error) })
    })
}

export const addFavoritesSales = (body) => (dispatch) => {
  dispatch({ type: 'ADD_FAVORITE_LOADING' })
  fetch(`${ENDOPOINT}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Ошибка добавления'))
    .then((data) => {
      dispatch({ type: 'ADD_FAVORITE_SUCCESS' })
      console.log('data', data)
    })
    .catch((error) => {
      dispatch({ type: 'ADD_FAVORITE_FAILED', error: errorHandler(error) })
    })
}

export const changeField = (formName, fieldName, value) => ({
  type: 'CHANGE_FIELD',
  formName,
  fieldName,
  value,
})

// export const deleteTodo = () => {
//   dispatch({ type: 'ADD_TODO_LOADING' })
//   fetch(`${endpoint}/add`, {
//     method: 'DELETE',
//   })
//     .then((response) => response.json())
//     .then(() => {
//       dispatch({ type: 'ADD_TODO_SUCCESS' })
//     })
// }

// export const addTodoReset = () => ({
//   type: 'ADD_TODO_RESET',
// })
