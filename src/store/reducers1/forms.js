const initialState = {
    auth: {
        username: '',
        password: '',
    },
    signin: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    },
}

export default (state = initialState, action) => {
    switch(action.type) {
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