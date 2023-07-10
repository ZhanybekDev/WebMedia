import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8RFF15T8cAuB6ctgbNqk1wl1_Av148xp1A&usqp=CAU" alt=""/>
            </div>

            <div>
                Ava + description
            </div>

            <div>
                My posts

                <div>
                    New Posts
                </div>

                <div>
                    <div>Post 1</div>

                    <div>Post 2</div>

                    <div>Post 3</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;