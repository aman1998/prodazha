const initilalState = {
  login: false,
  profile: false,
  search: '',
  auth: {
    username: '',
    password: '',
  },
  registr: {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    mail: '',
    phone: '',
    image: '',
    isAdmin: false,
  },
  profiles: {
    id: '',
    token: localStorage.getItem('token'),
    profile: {},
    favoritesList: [],
    profilesList: [],
  },
  list: {
    title: '',
    price: '',
    category: '',
    image: '',
    imagesList: [],
    addList: [],
  },
}

const reducer = (state = initilalState, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return {
        ...state,
        login: action.login,
      }
    case 'SHOW_PROFILE':
      return {
        ...state,
        profile: action.profile,
      }
    case 'SHOW_SEARCH_RESULT':
      return {
        ...state,
        search: action.search,
      }
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.fieldName]: action.value,
        },
      }
    default:
      return state
  }
}

export default reducer
