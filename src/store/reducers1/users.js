const initialState = {
  data: [],
  favoritesData: [],
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        data: action.data,
        get: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'GET_USERS_LOADING':
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'GET_USERS_FAILED':
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'GET_FAVORITES_LIST':
      return {
        ...state,
        favoritesData: action.favoritesData,
      }
    default:
      return state
  }
}

export default reducer
