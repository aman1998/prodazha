export const showLogin = (login) => ({
    type: 'SHOW_LOGIN',
    login,
})

export const showProfile = (profile) => ({
    type: 'SHOW_PROFILE',
    profile,
})

export const changeField = (formName, fieldName, value) => ({
    type: 'CHANGE_FIELD',
    formName, 
    fieldName, 
    value
})