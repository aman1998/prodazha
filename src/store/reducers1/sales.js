const initialState = {
  data: [],
  favoriteData: [],
  searchResult: '',
  description: {
    title: '',
    price: '',
    category: '',
    image: '',
    images: [],
  },
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  add: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  put: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  delete: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // SALES
    case 'GET_SALES_SUCCESS':
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
    case 'GET_SALES_LOADING':
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'GET_SALES_FAILED':
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }

    case 'ADD_SALE_SUCCESS':
      return {
        ...state,
        add: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'ADD_SALE_LOADING':
      return {
        ...state,
        add: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'ADD_SALE_FAILED':
      return {
        ...state,
        add: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'PUT_SALE_FAILED':
      return {
        ...state,
        put: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'PUT_SALE_SUCCESS':
      return {
        ...state,
        put: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'PUT_SALE_LOADING':
      return {
        ...state,
        put: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
      // FAVORITES SALES
    case 'GET_FAVORITES_SUCCESS':
      return {
        ...state,
        favoriteData: action.favoriteData,
        get: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'GET_FAVORITES_LOADING':
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'GET_FAVORITES_FAILED':
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }

    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        add: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'ADD_FAVORITE_LOADING':
      return {
        ...state,
        add: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'ADD_FAVORITE_FAILED':
      return {
        ...state,
        add: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'DELETE_FAVORITE_FAILED':
      return {
        ...state,
        delete: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'DELETE_FAVORITE_SUCCESS':
      return {
        ...state,
        delete: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'DELETE_FAVORITE_LOADING':
      return {
        ...state,
        delete: {
          success: false,
          loading: false,
          failed: false,
          error: action.error,
        },
      }
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.fieldName]: action.value,
        },
      }
    case 'SHOW_SEARCH_RESULT':
      return {
        ...state,
        searchResult: action.searchResult,
      }
    default:
      return state
  }
}

export default reducer
