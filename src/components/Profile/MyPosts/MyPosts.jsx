import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                <Post message="Hello, it`s my first post"/>
                <Post message="Hello, it`s my second post"/>
            </div>
        </div>
    );
};

export default MyPosts;