import {usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, text: "Hello, it`s my first post"},
        {id: 2, text: "Hello, it`s my second post"}
    ],
    newPostText: "",
    profile: null
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        });
}

export default profileReducer
