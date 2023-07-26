let rerenderEntireThree = () => {
    console.log("Already`s update")
}

const state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePages.newPostText,
        likesCount: 0
    }
    state.profilePages.posts.push(newPost)
    state.profilePages.newPostText = ''
    rerenderEntireThree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePages.newPostText = newText
    rerenderEntireThree(state)
}

export const subscribe = (observer) => {
    rerenderEntireThree = observer
}

export default state

