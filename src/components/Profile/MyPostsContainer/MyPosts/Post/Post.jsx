const Post = (props) => {
    return (
        <div>
            <img src="https://avatar.vkplay.ru/avatar/148930859.90.jpeg" alt=""/>
            {props.text}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;
