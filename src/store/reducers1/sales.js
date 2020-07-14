const initialState = {
  data: [],
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    // case 'ADD_SALE_RESET':
    //   return {
    //     ...state,
    //     add: initialState.add,
    //   }
    default:
      return state
  }
}

export default reducer
