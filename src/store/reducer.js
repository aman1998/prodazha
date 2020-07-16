const initilalState = {
  login: false,
  edit: false,
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
    case 'SHOW_EDIT':
      return {
        ...state,
        edit: action.edit,
      }
    default:
      return state
  }
}

export default reducer
