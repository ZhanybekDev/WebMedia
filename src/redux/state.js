export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
export const SEND_MESSAGE = "SEND_MESSAGE"

const store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, text: "Hello, it`s my first post"},
                {id: 2, text: "Hello, it`s my second post"}
            ],
            newPostText: ""
        },
        dialogsPages: {
            dialogs: [
                {id: 1, name: "Aidana"},
                {id: 2, name: "Amina"},
                {id: 3, name: "Umar"},
                {id: 4, name: "Nursultan"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your tasks?"},
                {id: 3, message: "Yo"}
            ],
            newMessageBody: ""
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log("Already`s update")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                text: this._state.profilePages.newPostText,
                likesCount: 0
            }
            this._state.profilePages.posts.push(newPost)
            this._state.profilePages.newPostText = ''
            this._callSubscriber(this._state)
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePages.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPages.newMessageBody  = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPages.newMessageBody
            this._state.dialogsPages.newMessageBody = ''
            this._state.dialogsPages.messages.push({id: 4, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default store
window.store = store

// store = OOP