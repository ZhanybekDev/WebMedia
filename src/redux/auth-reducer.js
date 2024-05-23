import {authApi} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState,action) => {
    switch (action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...state.action,
                isAuth: true,
                }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => (dispatch) => {
     authApi.me().then(res => {
        if(res.data.resultCode === 0){
            let {id, email , login} = res.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    });
}

export default authReducer
