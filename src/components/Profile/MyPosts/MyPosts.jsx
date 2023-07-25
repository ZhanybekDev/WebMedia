import Post from "./Post/Post";
import s from './MyPosts.module.css'
import React from "react";

const MyPosts = (props) => {

    let PostsElement = props.posts.map(post => <Post text={post.text}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        debugger
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
        <div className={s.myPosts}>
            My posts

            <div className={s.myPostsBlock}>
                <disv>
                    <textarea ref={newPostElement}></textarea>
                </disv>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div>
                {PostsElement}
            </div>
        </div>
    );
};

export default MyPosts;