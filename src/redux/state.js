import {rerenderEntireThree} from "../rerender";

const state = {
    profilePages: {
        posts: [
            {id: 1, text: "Hello, it`s my first post"},
            {id: 2, text: "Hello, it`s my second post"}
        ]
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

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        text: postMessage,
        likesCount: 0
    }
    state.profilePages.posts.push(newPost)
    rerenderEntireThree(state)
}

export default state

