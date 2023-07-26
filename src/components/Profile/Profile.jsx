import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePages.posts}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePages.newPostText}
                     addPost={props.addPost}/>
        </div>
    );
};

export default Profile;