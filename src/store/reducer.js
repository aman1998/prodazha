const initilalState = {
    login: false,
    profile: true,
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
    },
    profiles: {
        firstname: '',
        lastname: '',
        username: '',
    },
    list: {
        title: '',
        price: '',
        category: '',
        addList: [],
    },
}

const reducer = (state = initilalState, action) => {
    switch(action.type) {
        case "SHOW_LOGIN":
        return{
            ...state,
            login: action.login
        }
        case "SHOW_PROFILE":
        return{
            ...state,
            profile: action.profile
        }
        case "SHOW_SEARCH_RESULT":
        return{
            ...state,
            search: action.search
        }
        case 'CHANGE_FIELD': 
            return{
                ...state,
                [action.formName]: {
                    ...state[action.formName],
                    [action.fieldName]: action.value,
                }
        }
        default:
            return state
    }
}

export default reducer