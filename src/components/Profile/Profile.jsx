import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
import {updateStatus} from "../../redux/profile-reducer";

const Profile = (props) => {

        return (
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        )
};

export default Profile;
