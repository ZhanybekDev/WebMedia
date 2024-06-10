import {authApi} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    return authApi.me().then(res => {
        if(res.data.resultCode === 0){
            let {id, email, login} = res.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    return authApi.login(email, password, rememberMe).then(res => {
        if(res.data.resultCode === 0){
            dispatch(getAuthUserData())
            return { success: true };
        } else {
            return { success: false, message: res.data.messages[0] || "Login or password is incorrect" };
        }
    });
}

export const logout = () => (dispatch) => {
    return authApi.logout().then(res => {
        if(res.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}

export default authReducer
