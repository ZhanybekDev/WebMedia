import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {

    let postsData = [
        {id: 1, text: "Hello, it`s my first post"},
        {id: 2, text: "Hello, it`s my second post"}
    ]

    let PostsElement = postsData.map(post => <Post text={post.text}/>)

    return (
        <div className={s.myPosts}>
            My posts

            <div className={s.myPostsBlock}>
                <disv>
                    <textarea></textarea>
                </disv>

                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div>
                {PostsElement}
            </div>
        </div>
    );
};

export default MyPosts;