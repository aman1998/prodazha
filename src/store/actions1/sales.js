const endpoint = 'http://localhost:1717'

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
  fetch(`${endpoint}/list`)
    .then((response) => checkResponse(response, 'Ошибка загрузки'))
    .then((data) => {
      dispatch({ type: 'GET_SALES_SUCCESS', data })
    })
    .catch((error) => {
      dispatch({ type: 'GET_SALES_FAILED', error: errorHandler(error) })
    })
}

export const addSale = (body) => (dispatch) => {
  dispatch({ type: 'ADD_TODO_LOADING' })
  fetch(`${endpoint}/add`, {
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
