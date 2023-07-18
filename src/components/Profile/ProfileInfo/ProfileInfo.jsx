import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8RFF15T8cAuB6ctgbNqk1wl1_Av148xp1A&usqp=CAU" alt=""/>
            </div>

            <div className={s.profileBlock}>
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;