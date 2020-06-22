const initilalState = {
    login: false,
    profile: false,
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
        default:
            return state
    }
}

export default reducer