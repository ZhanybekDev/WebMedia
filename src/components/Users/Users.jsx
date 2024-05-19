import React from "react"
import styles from "./users.module.css";
import userPhoto from "../../assets/ava.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingInProgress} from "../../redux/users-reducer";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for(let i= 1; i <= pagesCount; i++ ){
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(item => (
                        <span className={props.currentPage === item && styles.selectedPage}
                              onClick={() => {
                                  props.onPageChanged(item)
                              }}
                        >{item}</span>
                    ))
                }
            </div>
            {props.users.map(item => (
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
                                    <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                        props.toggleFollowingInProgress(true, item.id)
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "7baaa672-b313-4671-8967-649084483f32"
                                            }
                                        })
                                            .then(res => {
                                                if(res.data.resultCode === 0){
                                                    props.unfollow(item.id)
                                                }
                                                props.toggleFollowingInProgress(false, item.id)
                                            });
                                    }}>Unfollow</button> :

                                    <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                        props.toggleFollowingInProgress(true, item.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {},{
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "7baaa672-b313-4671-8967-649084483f32"
                                            }
                                        })
                                            .then(res => {
                                                if(res.data.resultCode === 0){
                                                    props.follow(item.id)
                                                }
                                                props.toggleFollowingInProgress(false, item.id)
                                            });
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
            ))}
        </div>
    )
}

export default Users
