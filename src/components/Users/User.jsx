import React from "react"
import styles from "./users.module.css";
import userPhoto from "../../assets/ava.jpg";
import {NavLink} from "react-router-dom";

const User = ({item, followingInProgress, unFollow, follow}) => {

    return (
                <div key={item.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + item.id} >
                                    <img src={item.photos.small !== null ? item.photos.small : userPhoto}
                                         alt={item.fullName} className={styles.userPhoto}/>
                                </NavLink>
                            </div>

                            <div>
                                {item.followed ?
                                    <button disabled={followingInProgress.some(id => id === item.id)} onClick={() => {
                                        unFollow(item.id)
                                    }}>Unfollow</button> :

                                    <button disabled={followingInProgress.some(id => id === item.id)} onClick={() => {
                                        follow(item.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                            </span>

                            <span>
                                <div>item.location.city</div>
                                <div>item.location.country</div>
                            </span>
                        </span>
                </div>
    )
}

export default User
