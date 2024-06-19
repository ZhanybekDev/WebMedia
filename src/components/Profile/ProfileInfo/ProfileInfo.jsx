import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return "Loading.."
    }
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8RFF15T8cAuB6ctgbNqk1wl1_Av148xp1A&usqp=CAU" alt=""/>
            </div>

            <div className={s.profileBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
