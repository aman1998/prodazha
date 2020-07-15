const initilalState = {
  login: false,
  search: '',
}

const reducer = (state = initilalState, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return {
        ...state,
        login: action.login,
      }
    case 'SHOW_SEARCH_RESULT':
      return {
        ...state,
        search: action.search,
      }
    default:
      return state
  }
}

export default reducer
