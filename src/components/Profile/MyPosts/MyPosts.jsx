import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let PostsElement = props.posts.map(post => <Post text={post.text}/>)

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