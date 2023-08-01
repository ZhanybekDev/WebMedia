import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.dialogsPages =  dialogsReducer(this._state.dialogsPages, action)
        this._state.profilePages =  profileReducer(this._state.profilePages, action)
        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
// store = OOP