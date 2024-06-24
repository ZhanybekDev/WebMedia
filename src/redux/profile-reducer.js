import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"
export const SET_STATUS = "SET_STATUS"
export const DELETE_POST = "DELETE_POST"

let initialState = {
    posts: [
        {id: 1, text: "Hello, it`s my first post"},
        {id: 2, text: "Hello, it`s my second post"}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState,action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.postId )
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST,postId })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        });
}

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            // if(!res.data.resultCode === 0){
                dispatch(setStatus(res.data))
            // }
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        });
}

export default profileReducer
