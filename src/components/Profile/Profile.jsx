import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePages.posts}
                     newPostText={props.profilePages.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;