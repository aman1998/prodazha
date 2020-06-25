const initilalState = {
    login: false,
    profile: false,
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
        addList: [],
    }
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