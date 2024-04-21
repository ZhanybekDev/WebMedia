export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
    posts: [
        {id: 1, text: "Hello, it`s my first post"},
        {id: 2, text: "Hello, it`s my second post"}
    ],
    newPostText: ""
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer
