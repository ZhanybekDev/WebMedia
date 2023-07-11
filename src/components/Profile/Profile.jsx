import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8RFF15T8cAuB6ctgbNqk1wl1_Av148xp1A&usqp=CAU" alt=""/>
            </div>

            <div>
                Ava + description
            </div>

            <MyPosts/>
        </div>
    );
};

export default Profile;