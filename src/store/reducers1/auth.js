const initialState = {
  token: localStorage.getItem('token'),
  myProfile: {},
  login: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
  signup: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: localStorage.getItem('token'),
        myProfile: action.myProfile,
        login: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'LOGIN_LOADING':
      return {
        ...state,
        login: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        login: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        me: action.me,
        get: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'SIGNUP_LOADING':
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'SIGNUP_FAILED':
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    case 'GET_TOKEN':
      return {
        ...state,
        token: localStorage.getItem('token'),
      }
    case 'GET_MY_PROFILE':
      return {
        ...state,
        myProfile: action.myProfile,
      }
    default: return state
  }
}

export default reducer
