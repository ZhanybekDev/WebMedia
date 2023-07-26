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
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                text: this._state.profilePages.newPostText,
                likesCount: 0
            }
            this._state.profilePages.posts.push(newPost)
            this._state.profilePages.newPostText = ''
            this._callSubscriber(this._state)
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePages.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store

// store = OOP