import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react'

let state = {
    posts: [
        {id: 1, text: "Hello, it`s my first post"},
        {id: 2, text: "Hello, it`s my second post"}
    ],
    newPostText: "",
    profile: null,
}

it('length of posts should be incremented ',  () => {
    let action = addPostActionCreator("it-zhanybek")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});

it('message of new post should be correct ',  () => {
    let action = addPostActionCreator("it-zhanybek")

    let newState = profileReducer(state, action)

    expect(newState.posts[2].text).toBe("it-zhanybek")
});

it('after deleting length of message should be decrement',  () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
});

it("after deleting length should`nt be changed",  () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
});
